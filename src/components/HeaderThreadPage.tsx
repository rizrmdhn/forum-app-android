import {View} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Input, Pressable} from 'native-base';

export default function HeaderThreadPage() {
  return (
    <View style={tw.style(`flex bg:light h-20 dark:bg-dark justify-between flex-row px-6 py-2`)}>
      <Pressable style={tw.style('my-4')}>
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
        />
        <Pressable style={tw.style('my-2 mr-2')}>
          <MaterialIcons name="search" size={30} color="white" />
        </Pressable>
      </View>
    </View>
  );
}
