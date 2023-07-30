import {Dimensions, Pressable, StyleSheet, Text, View, Appearance} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, {useEffect} from 'react';
import tw from '../lib/tailwind';
import useSelectState from '../hooks/useSelectState';
import {useDispatch} from 'react-redux';
import {asyncGetTheme, asyncSetTheme} from '../states/theme/action';

const {width, height} = Dimensions.get('window');

export default function MenuPage({navigation}: {navigation: any}): JSX.Element {
  const authUser = useSelectState('authUser');

  const isDarkMode = Appearance.getColorScheme() === 'dark';

  const dispatch = useDispatch();

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const changeTheme = () => {
    dispatch(asyncSetTheme(isDarkMode ? 'light' : 'dark'));
  };

  useEffect(() => {
    dispatch(asyncGetTheme());
  }, [dispatch]);

  return (
    <View style={tw.style('items-center justify-center', styles.menuContainer)}>
      <Pressable
        style={tw.style(
          'flex flex-row items-center justify-between mx-auto w-60 h-12 my-8   rounded-xl',
          {
            'bg-threadCard': !isDarkMode,
            'bg-threadCardDark': isDarkMode,
          },
        )}
        onPress={changeTheme}>
        <MaterialIcons
          name="bedtime"
          size={30}
          style={tw.style('text-black dark:text-white mx-10')}
        />
        <Text style={tw.style('text-black dark:text-white mr-20 font-bold text-base')}>
          Dark Mode
        </Text>
      </Pressable>
      <Pressable
        style={tw.style(
          'flex flex-row items-center  justify-between mx-auto w-60 h-12 my-8 bg-threadCard dark:bg-threadCardDark rounded-xl',
        )}>
        <MaterialIcons
          name="g-translate"
          size={30}
          style={tw.style('text-black dark:text-white mx-10')}
        />
        <Text style={tw.style('text-black dark:text-white mr-20 font-bold text-base')}>Bahasa</Text>
      </Pressable>
      {authUser ? (
        <Pressable
          style={tw.style(
            'flex flex-row items-center  justify-between w-60 h-12 my-8  bg-threadCard dark:bg-threadCardDark rounded-xl',
          )}>
          <MaterialIcons
            name="logout"
            size={30}
            style={tw.style('text-black dark:text-white mx-10')}
          />
          <Text style={tw.style('text-black dark:text-white mr-20 font-bold text-base')}>
            Logout
          </Text>
        </Pressable>
      ) : (
        <Pressable
          style={tw.style(
            'flex flex-row items-center  justify-between w-60 h-12 my-8  bg-threadCard dark:bg-threadCardDark rounded-xl',
          )}
          onPress={navigateToLogin}>
          <MaterialIcons
            name="login"
            size={30}
            style={tw.style('text-black dark:text-white mx-10')}
          />
          <Text style={tw.style('text-black dark:text-white mr-20 font-bold text-base')}>
            Login
          </Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    height: height - 100,
  },
});
