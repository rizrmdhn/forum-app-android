import {View} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';
import BottomNavigationItem from './BottomNavigationItem';
import {useDispatch} from 'react-redux';
import {setShowMenu, unsetShowMenu} from '../states/showMenu/action';
import useSelectState from '../hooks/useSelectState';

export default function BottomNavigation() {
  const showMenu = useSelectState('showMenu');

  const dispatch = useDispatch();

  const openMenu = () => {
    if (showMenu) {
      dispatch(unsetShowMenu());
    } else {
      dispatch(setShowMenu());
    }
  };

  return (
    <View
      style={tw.style(
        `flex h-20 bg-defaultLightHeaders dark:bg-dark items-center justify-between flex-row px-6 py-2`,
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
        onPressAction={openMenu}
      />
    </View>
  );
}
