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
    const isDark = Appearance.getColorScheme() === 'dark';
    await AsyncStorage.setItem('theme', theme);
    Appearance.setColorScheme(isDark ? 'light' : 'dark');
    dispatch(changeTheme(theme));
  };
}

function asyncGetTheme(): any {
  return async (dispatch: AppDispatch) => {
    const theme = await AsyncStorage.getItem('theme');
    if (theme) {
      const isDark = theme === 'dark';
      dispatch(changeTheme(JSON.stringify(theme)));
      Appearance.setColorScheme(isDark ? 'dark' : 'light');
    }
  };
}

export {ActionType, asyncSetTheme, asyncGetTheme};
