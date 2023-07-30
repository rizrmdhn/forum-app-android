import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';

export default function Leaderboardheader() {
  return (
    <View style={tw.style(`flex h-20 items-center justify-center bg-defaultLightHeaders`)}>
      <Text style={tw.style('text-white font-bold text-sm')}>Klasemen Pengguna Aktif</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
