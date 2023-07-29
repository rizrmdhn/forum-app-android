import {Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import React from 'react';
import tw from '../lib/tailwind';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {openModalActionCreator} from '../states/openModal/action';

export default function AddNewThreadButton() {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(dispatch(openModalActionCreator()));
  };

  return (
    <Pressable
      onPress={openModal}
      style={tw.style(
        'dark:bg-light bg-light bottom-20 right-10 w-10 h-10 flex flex-auto items-center justify-center rounded-full absolute',
      )}>
      <MaterialIcons name="add" size={40} color={tw.color('black')} />
    </Pressable>
  );
}
