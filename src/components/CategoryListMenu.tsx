import {Text, View} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';
import * as Animatable from 'react-native-animatable';

export default function CategoryListMenu() {
  return (
    <Animatable.View
      animation={'fadeInLeftBig'}
      style={tw.style('absolute top-20 left-0 bg-defaultLightHeaders w-36 rounded-br-2xl')}>
      <View style={tw.style('flex flex-col items-center')}>
        <Text style={tw.style('text-white dark:text-white')}>Kategory List</Text>
      </View>
      <View style={tw.style('flex flex-row flex-wrap p-2')}>
        <View style={tw.style('self-start p-1 ml-3 rounded my-2 bg-light items-baseline')}>
          <Text style={tw.style('text-black dark:text-white')}>#react</Text>
        </View>
        <View style={tw.style('self-start p-1 ml-3 rounded my-2 bg-light items-baseline')}>
          <Text style={tw.style('text-black dark:text-white')}>#react</Text>
        </View>
        <View style={tw.style('self-start p-1 ml-3 rounded my-2 bg-light items-baseline')}>
          <Text style={tw.style('text-black dark:text-white')}>#react</Text>
        </View>
        <View style={tw.style('self-start p-1 ml-3 rounded my-2 bg-light items-baseline')}>
          <Text style={tw.style('text-black dark:text-white')}>#react</Text>
        </View>
        <View style={tw.style('self-start p-1 ml-3 rounded my-2 bg-light items-baseline')}>
          <Text style={tw.style('text-black dark:text-white')}>#react</Text>
        </View>
      </View>
    </Animatable.View>
  );
}
