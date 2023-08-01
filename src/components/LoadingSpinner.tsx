import {
  ActivityIndicator,
  StyleSheet,
  View,
  Appearance,
  Dimensions,
} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';
import {BlurView} from '@react-native-community/blur';

const {width, height} = Dimensions.get('window');

export default function LoadingSpinner() {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  return (
    <View
      style={tw.style(
        'flex flex-row items-center justify-center bg-transparent',
        {
          width: width,
          height: height - 160,
        },
        styles.absolute,
      )}>
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="black"
      />
      <ActivityIndicator
        size="large"
        color={isDarkMode ? tw.color('white') : tw.color('black')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
