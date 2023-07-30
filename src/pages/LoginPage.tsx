import {StyleSheet, Pressable, View, Dimensions, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import tw from '../lib/tailwind';
import {Input} from 'native-base';

const {height} = Dimensions.get('window');

export default function LoginPage({navigation}: {navigation: any}) {
  return (
    <View style={styles.menuContainer}>
      <View style={tw.style('h-20 flex items-start justify-center')}>
        <Pressable onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back-ios"
            size={30}
            style={tw.style('text-black dark:text-white mx-10')}
          />
        </Pressable>
      </View>
      <View style={tw.style('flex flex-col items-center mt-20')}>
        <View style={tw.style('mb-20')}>
          <Text style={tw.style('text-black dark:text-white font-bold text-4xl')}>Login</Text>
        </View>
        <View style={tw.style('w-72')}>
          <Input placeholder="Email" placeholderTextColor="black" borderColor={'#000'} />
        </View>
        <View style={tw.style('w-72 my-8')}>
          <Input
            placeholder="Password"
            placeholderTextColor="black"
            type="password"
            borderColor={'#000'}
          />
        </View>
        <View>
          <Pressable
            style={tw.style(
              'flex flex-row items-center justify-center w-72 h-12 bg-black dark:bg-threadCardDark',
            )}>
            <Text style={tw.style('text-white dark:text-black font-bold text-base')}>Login</Text>
          </Pressable>
        </View>
        <View style={tw.style('mt-4')}>
          <Text style={tw.style('text-black dark:text-white')}>
            Don't have an account?{' '}
            <Text
              onPress={() => navigation.navigate('Register')}
              style={tw.style('text-black dark:text-white underline')}>
              Sign up here
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    height: height - 100,
  },
});