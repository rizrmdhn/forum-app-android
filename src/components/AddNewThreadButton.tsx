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
        'dark:bg-light bg-dark bottom-24 right-5 w-10 h-10 flex flex-auto items-center justify-center rounded-full absolute',
      )}>
      <MaterialIcons name="add" size={40} style={tw.style('text-white dark:text-black')} />
    </Pressable>
  );
}
