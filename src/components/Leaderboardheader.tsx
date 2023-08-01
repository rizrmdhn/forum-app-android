import {StyleSheet, Text, View, Appearance} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';
import useLocale from '../hooks/useLocale';

export default function Leaderboardheader() {
  const {textLeaderboard} = useLocale();

  const isDarkMode = Appearance.getColorScheme() === 'dark';

  return (
    <View
      style={tw.style(`flex h-20 items-center justify-center`, {
        'bg-defaultLightHeaders': !isDarkMode,
        'bg-defaultDarkHeaders': isDarkMode,
      })}>
      <Text style={tw.style('text-white font-bold text-sm')}>
        {textLeaderboard}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
