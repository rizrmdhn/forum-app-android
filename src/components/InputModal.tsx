import React from 'react';
import {Appearance} from 'react-native';
import {Modal, Input, FormControl, Button, TextArea} from 'native-base';
import {useDispatch} from 'react-redux';
import useSelectState from '../hooks/useSelectState';
import {closeModalActionCreator} from '../states/openModal/action';
import tw from '../lib/tailwind';
import useCreateThread from '../hooks/useCreateThread';

export default function InputModal() {
  const openModal = useSelectState('openModal') as boolean;

  const isDarkMode = Appearance.getColorScheme() === 'dark';

  const [
    title,
    onChangeTitle,
    body,
    onChangeBody,
    category,
    onChangeCategory,
    onSubmit,
  ] = useCreateThread();

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeModalActionCreator());
  };

  const submit = () => {
    onSubmit();
    closeModal();
  };

  return (
    <Modal isOpen={openModal} onClose={closeModal}>
      <Modal.Content
        maxWidth="400px"
        style={tw.style({
          'bg-dark': isDarkMode,
          'bg-light': !isDarkMode,
        })}>
        <Modal.CloseButton
          _icon={{
            color: isDarkMode ? '#fff' : '#000',
          }}
        />
        <Modal.Header
          backgroundColor={isDarkMode ? '#222831' : '#EEEEEE'}
          _text={{color: isDarkMode ? '#fff' : '#000'}}>
          New Thread
        </Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label _text={{color: isDarkMode ? '#fff' : '#000'}}>
              Title
            </FormControl.Label>
            <Input
              value={title}
              onChangeText={onChangeTitle}
              color={isDarkMode ? '#fff' : '#000'}
            />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label _text={{color: isDarkMode ? '#fff' : '#000'}}>
              Category
            </FormControl.Label>
            <Input
              value={category}
              onChangeText={onChangeCategory}
              color={isDarkMode ? '#fff' : '#000'}
            />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label _text={{color: isDarkMode ? '#fff' : '#000'}}>
              Content
            </FormControl.Label>
            <TextArea
              h="100px"
              autoCompleteType={undefined}
              value={body}
              onChangeText={onChangeBody}
              color={isDarkMode ? '#fff' : '#000'}
            />
          </FormControl>
        </Modal.Body>
        <Modal.Footer backgroundColor={isDarkMode ? '#222831' : '#EEEEEE'}>
          <Button.Group space={2}>
            <Button bgColor={'red.500'} onPress={closeModal}>
              Cancel
            </Button>
            <Button onPress={submit}>Add Thread</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
