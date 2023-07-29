import {View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import HeaderThreadPage from '../components/HeaderThreadPage';
import BottomNavigation from '../components/BottomNavigation';
import InputModal from '../components/InputModal';

export default function ThreadPageLayout({children}: PropsWithChildren) {
  return (
    <View>
      <HeaderThreadPage />
      {children}
      <BottomNavigation />
      <InputModal />
    </View>
  );
}
