import React from 'react';
import {Modal, Input, FormControl, Button} from 'native-base';
import {useDispatch} from 'react-redux';
import useSelectState from '../hooks/useSelectState';
import {closeModalActionCreator} from '../states/openModal/action';

export default function InputModal() {
  const openModal = useSelectState('openModal');

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeModalActionCreator());
  };

  return (
    <Modal isOpen={openModal} onClose={closeModal}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Contact Us</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button variant="ghost" colorScheme="blueGray" onPress={closeModal}>
              Cancel
            </Button>
            <Button onPress={() => {}}>Save</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
