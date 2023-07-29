import React from 'react';
import {Modal, Input, FormControl, Button, TextArea} from 'native-base';
import {useDispatch} from 'react-redux';
import useSelectState from '../hooks/useSelectState';
import {closeModalActionCreator} from '../states/openModal/action';
import tw from '../lib/tailwind';

export default function InputModal() {
  const openModal = useSelectState('openModal');

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeModalActionCreator());
  };

  return (
    <Modal isOpen={openModal} onClose={closeModal}>
      <Modal.Content maxWidth="400px" style={tw.style('dark:bg-dark bg-light')}>
        <Modal.CloseButton />
        <Modal.Header style={tw.style('dark:bg-dark bg-light')}>New Thread</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label style={tw.style('text-white dark:text-black')}>
              Title
            </FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label style={tw.style('text-white dark:text-black')}>
              Category
            </FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label style={tw.style('text-white dark:text-black')}>
              Content
            </FormControl.Label>
            <TextArea h="100px" autoCompleteType={undefined} />
          </FormControl>
        </Modal.Body>
        <Modal.Footer style={tw.style('dark:bg-dark bg-light')}>
          <Button.Group space={2}>
            <Button bgColor={'red.500'} onPress={closeModal}>
              Cancel
            </Button>
            <Button onPress={() => {}}>Add Thread</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
