import {View} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';
import BottomNavigationItem from './BottomNavigationItem';

export default function BottomNavigation() {
  return (
    <View
      style={tw.style(
        `flex bg:light dark:bg-dark items-center justify-between flex-row px-6 py-2`,
      )}>
      <BottomNavigationItem
        className="flex h-12 w-24 flex-col items-center justify-center"
        iconName="leaderboard"
        label="Leaderboard"
      />
      <BottomNavigationItem
        className="flex h-12 w-24 flex-col items-center justify-center"
        iconName="forum"
        label="Forum"
      />
      <BottomNavigationItem
        className="flex h-12 w-24 flex-col items-center justify-center"
        iconName="menu"
        label="Menu"
      />
    </View>
  );
}
