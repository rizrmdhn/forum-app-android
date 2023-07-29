import {View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import HeaderThreadPage from '../components/HeaderThreadPage';
import BottomNavigation from '../components/BottomNavigation';
import InputModal from '../components/InputModal';
import MenuItem from '../components/MenuItem';
import useSelectState from '../hooks/useSelectState';
import CategoryListMenu from '../components/CategoryListMenu';

export default function ThreadPageLayout({children}: PropsWithChildren) {
  const showMenu = useSelectState('showMenu');
  const showCategory = useSelectState('showCategory');

  return (
    <View>
      <HeaderThreadPage />
      {children}
      {showCategory && <CategoryListMenu />}
      {showMenu && <MenuItem />}
      <BottomNavigation />
      <InputModal />
    </View>
  );
}
