import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  Appearance,
  Dimensions,
} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';

const {width, height} = Dimensions.get('window');

export default function LoadingSpinner() {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  return (
    <View
      style={tw.style(
        'flex flex-col items-center justify-center w-64 h-24',
        styles.absoluteCenter,
        {
          'bg-light border-2 border-categoryDark rounded': !isDarkMode,
          'bg-categoryDark border-2 border-light rounded': isDarkMode,
        },
      )}>
      <Text
        style={tw.style('my-2 font-bold text-xl', {
          'text-black': !isDarkMode,
          'text-white': isDarkMode,
        })}>
        Loading...
      </Text>
      <ActivityIndicator
        size="large"
        color={isDarkMode ? tw.color('white') : tw.color('black')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  absoluteCenter: {
    position: 'absolute',
    top: height / 2.5,
    left: width / 6,
  },
});
