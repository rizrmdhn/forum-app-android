import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Appearance,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, {useEffect} from 'react';
import tw from '../lib/tailwind';
import useSelectState from '../hooks/useSelectState';
import {useDispatch} from 'react-redux';
import {asyncGetTheme, asyncSetTheme} from '../states/theme/action';
import useLocale from '../hooks/useLocale';
import {asyncSetLocale} from '../states/locale/action';

const {height} = Dimensions.get('window');

export default function MenuPage({navigation}: {navigation: any}): JSX.Element {
  const authUser = useSelectState('authUser');
  const locale = useSelectState('locale');

  const {textLogin, textLogout, textDarkMode, textLightMode} = useLocale();

  const isDarkMode = Appearance.getColorScheme() === 'dark';

  const dispatch = useDispatch();

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const changeTheme = () => {
    Appearance.setColorScheme(isDarkMode ? 'light' : 'dark');
    dispatch(asyncSetTheme(isDarkMode ? 'light' : 'dark'));
  };

  const changeLanguage = () => {
    dispatch(asyncSetLocale(locale === 'en' ? 'id' : 'en'));
  };

  useEffect(() => {
    dispatch(asyncGetTheme());
  }, [dispatch]);

  return (
    <View
      style={tw.style('items-center justify-center', styles.menuContainer, {
        'bg-light': !isDarkMode,
        'bg-categoryDark': isDarkMode,
      })}>
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
          name={isDarkMode ? 'sunny' : 'bedtime'}
          size={30}
          style={tw.style('mx-10', {
            'text-black': !isDarkMode,
            'text-white': isDarkMode,
          })}
        />
        <Text
          style={tw.style(' mr-20 font-bold text-base', {
            'text-black': !isDarkMode,
            'text-white': isDarkMode,
          })}>
          {isDarkMode ? textLightMode : textDarkMode}
        </Text>
      </Pressable>
      <Pressable
        style={tw.style(
          'flex flex-row items-center  justify-between mx-auto w-60 h-12 my-8 bg-threadCard dark:bg-threadCardDark rounded-xl',
          {
            'bg-threadCard': !isDarkMode,
            'bg-threadCardDark': isDarkMode,
          },
        )}
        onPress={changeLanguage}>
        <MaterialIcons
          name="g-translate"
          size={30}
          style={tw.style('mx-10', {
            'text-black': !isDarkMode,
            'text-white': isDarkMode,
          })}
        />
        <Text
          style={tw.style('mr-20 font-bold text-base', {
            'text-black': !isDarkMode,
            'text-white': isDarkMode,
          })}>
          {locale === 'en' ? 'Bahasa' : 'English'}
        </Text>
      </Pressable>
      {authUser ? (
        <Pressable
          style={tw.style(
            'flex flex-row items-center  justify-between w-60 h-12 my-8  bg-threadCard dark:bg-threadCardDark rounded-xl',
            {
              'bg-threadCard': !isDarkMode,
              'bg-threadCardDark': isDarkMode,
            },
          )}>
          <MaterialIcons
            name="logout"
            size={30}
            style={tw.style(' mx-10', {
              'text-black': !isDarkMode,
              'text-white': isDarkMode,
            })}
          />
          <Text
            style={tw.style('mr-20 font-bold text-base', {
              'text-black': !isDarkMode,
              'text-white': isDarkMode,
            })}>
            {textLogout}
          </Text>
        </Pressable>
      ) : (
        <Pressable
          style={tw.style(
            'flex flex-row items-center  justify-between w-60 h-12 my-8  bg-threadCard dark:bg-threadCardDark rounded-xl',
            {
              'bg-threadCard': !isDarkMode,
              'bg-threadCardDark': isDarkMode,
            },
          )}
          onPress={navigateToLogin}>
          <MaterialIcons
            name="login"
            size={30}
            style={tw.style('mx-10', {
              'text-black': !isDarkMode,
              'text-white': isDarkMode,
            })}
          />
          <Text
            style={tw.style('mr-20 font-bold text-base', {
              'text-black': !isDarkMode,
              'text-white': isDarkMode,
            })}>
            {textLogin}
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
