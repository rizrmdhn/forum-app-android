import {StyleSheet, Text, View, Pressable, Appearance} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import tw from '../lib/tailwind';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../states';
import {setThreadsDetailToNull} from '../states/detailThread/action';

export default function DetailThreadHeader({
  navigation,
  title,
}: {
  navigation: any;
  title: string;
}) {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  const dispatch = useDispatch<AppDispatch>();

  const onNavigateBack = () => {
    setTimeout(() => {
      dispatch(setThreadsDetailToNull());
    }, 500);
    navigation.goBack();
  };

  return (
    <View
      style={tw.style('h-20 flex flex-row items-center', {
        'bg-defaultLightHeaders': !isDarkMode,
        'bg-defaultDarkHeaders': isDarkMode,
      })}>
      <Pressable onPress={onNavigateBack}>
        <MaterialIcons
          name="arrow-back-ios"
          size={30}
          style={tw.style('mx-10 text-white')}
        />
      </Pressable>
      <View style={tw.style('mx-2 w-56')}>
        <Text
          style={tw.style('font-bold text-base text-white text-center')}
          numberOfLines={2}>
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
