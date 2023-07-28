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
        className="h-12 flex flex-col items-center justify-center"
        iconName="leaderboard"
        label="Leaderboard"
      />
      <BottomNavigationItem
        className="h-12 flex flex-col items-center justify-center"
        iconName="forum"
        label="Forum"
      />
      <BottomNavigationItem
        className="h-12 flex flex-col items-center justify-center"
        iconName="menu"
        label="Menu"
      />
    </View>
  );
}
