import {Pressable, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import tw from '../lib/tailwind';

export default function MenuItem() {
  return (
    <Animatable.View
      animation={'fadeInUpBig'}
      style={tw.style(
        'absolute bottom-20 right-0 flex flex-col bg-defaultLightHeaders rounded-tl-2xl',
      )}>
      <Pressable style={tw.style('flex flex-row my-3 py-1 px-4')}>
        <MaterialIcons name="bedtime" size={30} color="white" />
        <Text style={tw.style('my-1 mx-2 font-bold')}>Dark</Text>
      </Pressable>
      <Pressable style={tw.style('flex flex-row my-3 py-1 px-4')}>
        <MaterialIcons name="g-translate" size={30} color="white" />
        <Text style={tw.style('my-1 mx-2 font-bold')}>English</Text>
      </Pressable>
      <Pressable style={tw.style('flex flex-row my-3 py-1 px-4')}>
        <MaterialIcons name="login" size={30} color="white" />
        <Text style={tw.style('my-1 mx-2 font-bold')}>Login</Text>
      </Pressable>
    </Animatable.View>
  );
}
