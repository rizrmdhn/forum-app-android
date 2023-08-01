import {
  StyleSheet,
  Pressable,
  View,
  Dimensions,
  Text,
  Appearance,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import tw from '../lib/tailwind';
import {Input} from 'native-base';
import useLocale from '../hooks/useLocale';
import useLogin from '../hooks/useLogin';

const {height} = Dimensions.get('window');

export default function LoginPage({navigation}: {navigation: any}) {
  const {textNeedAccount, textRegisterHere} = useLocale();

  const [email, onChangeEmail, password, onChangePassword, onSubmit] =
    useLogin();

  const isDarkMode = Appearance.getColorScheme() === 'dark';

  return (
    <View
      style={tw.style(
        {
          'bg-light': !isDarkMode,
          'bg-categoryDark': isDarkMode,
        },
        styles.menuContainer,
      )}>
      <View style={tw.style('h-20 flex items-start justify-center')}>
        <Pressable onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back-ios"
            size={30}
            style={tw.style('mx-10', {
              'text-black': !isDarkMode,
              'text-white': isDarkMode,
            })}
          />
        </Pressable>
      </View>
      <View style={tw.style('flex flex-col items-center mt-20')}>
        <View style={tw.style('mb-20')}>
          <Text
            style={tw.style('font-bold text-4xl', {
              'text-black': !isDarkMode,
              'text-white': isDarkMode,
            })}>
            Login
          </Text>
        </View>
        <View style={tw.style('w-72')}>
          <Input
            placeholder="Email"
            placeholderTextColor={isDarkMode ? '#fff' : '#000'}
            borderColor={isDarkMode ? '#fff' : '#000'}
            color={isDarkMode ? '#fff' : '#000'}
            value={email}
            onChangeText={onChangeEmail}
          />
        </View>
        <View style={tw.style('w-72 my-8')}>
          <Input
            placeholder="Password"
            type="password"
            placeholderTextColor={isDarkMode ? '#fff' : '#000'}
            borderColor={isDarkMode ? '#fff' : '#000'}
            color={isDarkMode ? '#fff' : '#000'}
            value={password}
            onChangeText={onChangePassword}
          />
        </View>
        <View>
          <Pressable
            style={tw.style(
              'flex flex-row items-center justify-center w-72 h-12',
              {
                'bg-black': !isDarkMode,
                'bg-white': isDarkMode,
              },
            )}>
            <Text
              style={tw.style('font-bold text-base', {
                'text-white': !isDarkMode,
                'text-black': isDarkMode,
              })}
              onPress={() => onSubmit({navigation})}>
              Login
            </Text>
          </Pressable>
        </View>
        <View style={tw.style('mt-4')}>
          <Text
            style={tw.style({
              'text-black': !isDarkMode,
              'text-white': isDarkMode,
            })}>
            {textNeedAccount}{' '}
            <Text
              onPress={() => navigation.navigate('Register')}
              style={tw.style('underline', {
                'text-black': !isDarkMode,
                'text-white': isDarkMode,
              })}>
              {textRegisterHere}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    height: height,
  },
});
