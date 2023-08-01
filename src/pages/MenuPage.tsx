import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Appearance,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, {useEffect} from 'react';
import tw from '../lib/tailwind';
import useSelectState from '../hooks/useSelectState';
import {useDispatch} from 'react-redux';
import {asyncGetTheme, asyncSetTheme} from '../states/theme/action';
import useLocale from '../hooks/useLocale';
import {asyncSetLocale} from '../states/locale/action';
import {asyncSetIsPreload} from '../states/isPreload/action';
import {AppDispatch} from '../states';
import {asyncUnsetAuthUser} from '../states/authUser/action';
import {SvgUri} from 'react-native-svg';
import {IUser} from '../types/interface';

const {height} = Dimensions.get('window');

export default function MenuPage({navigation}: {navigation: any}): JSX.Element {
  const authUser = useSelectState('authUser') as IUser;
  const locale = useSelectState('locale');

  const {
    textLogin,
    textLogout,
    textDarkMode,
    textLightMode,
    textLogoutSuccess,
    textLogoutFailed,
  } = useLocale();

  const isDarkMode = Appearance.getColorScheme() === 'dark';

  const dispatch = useDispatch<AppDispatch>();

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

  const logout = () => {
    dispatch(
      asyncUnsetAuthUser({
        textLogoutSuccess,
        textLogoutError: textLogoutFailed,
      }),
    );
  };

  useEffect(() => {
    dispatch(asyncSetIsPreload());
    dispatch(asyncGetTheme());
  }, [dispatch]);

  return (
    <View
      style={tw.style(
        'items-center',
        authUser && 'justify-between',
        !authUser && 'justify-center',
        styles.menuContainer,
        {
          'bg-light': !isDarkMode,
          'bg-categoryDark': isDarkMode,
        },
      )}>
      {authUser && (
        <View style={tw.style('flex flex-col items-center pt-16')}>
          <View>
            <Image
              style={tw.style('w-16 h-16 rounded-full')}
              source={{
                uri: authUser.avatar,
              }}
            />
          </View>
          <View style={tw.style('flex flex-col items-center mt-2')}>
            <Text
              style={tw.style('text-base font-bold', {
                'text-black': !isDarkMode,
                'text-white': isDarkMode,
              })}>
              {authUser.name}
            </Text>
            <Text
              style={tw.style('text-base font-bold', {
                'text-black': !isDarkMode,
                'text-white': isDarkMode,
              })}>
              {authUser.email}
            </Text>
          </View>
        </View>
      )}
      <View style={tw.style('flex flex-col items-center', authUser && 'pb-16')}>
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
            )}
            onPress={logout}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    height: height - 100,
  },
});
