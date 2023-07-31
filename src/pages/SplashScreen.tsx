import {StyleSheet, Text, View, Dimensions, Appearance} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, {useEffect} from 'react';
import tw from '../lib/tailwind';
import {useDispatch} from 'react-redux';
import {asyncGetTheme} from '../states/theme/action';

const {height} = Dimensions.get('window');

export default function SplashScreen({navigation}: {navigation: any}) {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetTheme());

    setTimeout(() => {
      navigation.navigate('Default');
    }, 2000);
  }, []);

  return (
    <View
      style={tw.style('w-auto flex items-center justify-center', {
        'bg-light': !isDarkMode,
        'bg-categoryDark': isDarkMode,
        height: height,
      })}>
      <View style={tw.style('flex flex-col items-center')}>
        <MaterialIcons
          name="forum"
          size={100}
          style={tw.style('my-2', {
            'text-black': !isDarkMode,
            'text-white': isDarkMode,
          })}
        />
        <Text
          style={tw.style('font-bold text-4xl', {
            'text-black': !isDarkMode,
            'text-white': isDarkMode,
          })}>
          Forum App
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
