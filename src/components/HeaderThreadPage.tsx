import {View, Pressable, Appearance} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Input} from 'native-base';
import useSelectState from '../hooks/useSelectState';
import {setShowCategory} from '../states/showCategory/action';
import {useDispatch} from 'react-redux';
import {setFilterThreadByTitle} from '../states/filterThreadByTitle/action';

export default function HeaderThreadPage() {
  const showCategory = useSelectState('showCategory');

  const dispatch = useDispatch();

  const isDarkMode = Appearance.getColorScheme() === 'dark';

  const openCategory = () => {
    if (showCategory) {
      dispatch(setShowCategory(false));
    } else {
      dispatch(setShowCategory(true));
    }
  };

  const onSearchByTitle = ({text}: any) => {
    dispatch(setFilterThreadByTitle(text));
  };

  return (
    <View
      style={tw.style(`flex h-20  justify-between flex-row px-6 py-2`, {
        'bg-defaultDarkHeaders': isDarkMode,
        'bg-defaultLightHeaders': !isDarkMode,
      })}>
      <Pressable style={tw.style('my-4')} onPress={openCategory}>
        <MaterialIcons name="filter-list-alt" size={30} color="white" />
      </Pressable>
      <View
        style={tw.style('flex flex-row h-12 my-2 rounded-full bg-threadCard w-72 justify-between')}>
        <Input
          borderWidth={0}
          placeholder="Search Thread ..."
          w="85%"
          rounded={'full'}
          placeholderTextColor={'white'}
          style={tw.style('text-white text-sm')}
          onChangeText={text => onSearchByTitle({text})}
        />
        <Pressable style={tw.style('my-2 mr-2')} onPress={() => console.log('item search')}>
          <MaterialIcons name="search" size={30} color="white" />
        </Pressable>
      </View>
    </View>
  );
}
