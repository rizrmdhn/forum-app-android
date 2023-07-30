import {AppDispatch} from '..';
import {IChangeThemeAction} from './types/interface';
import {Appearance} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

enum ActionType {
  CHANGE_THEME = 'CHANGE_THEME',
}

function changeTheme(theme: string): IChangeThemeAction {
  return {
    type: ActionType.CHANGE_THEME,
    payload: {
      theme,
    },
  };
}

function asyncSetTheme(theme: string): any {
  return async (dispatch: AppDispatch) => {
    try {
      const isDark = Appearance.getColorScheme() === 'dark';
      await AsyncStorage.setItem('theme', theme);
      Appearance.setColorScheme(isDark ? 'light' : 'dark');
      dispatch(changeTheme(theme));
    } catch (e) {
      dispatch(changeTheme('light'));
    }
  };
}

function asyncGetTheme(): any {
  return async (dispatch: AppDispatch) => {
    try {
      const theme = await AsyncStorage.getItem('theme');
      const isDark = Appearance.getColorScheme() === 'dark';
      if (theme) {
        dispatch(changeTheme(isDark ? 'dark' : 'light'));
        Appearance.setColorScheme(isDark ? 'light' : 'dark');
      }
    } catch (e) {
      dispatch(changeTheme('light'));
    }
  };
}

export {ActionType, asyncSetTheme, asyncGetTheme};
