import {AppDispatch} from '..';
import {IChangeThemeAction} from './types/interface';
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

function asyncSetTheme(theme: string) {
  return async (dispatch: AppDispatch) => {
    try {
      await AsyncStorage.setItem('theme', theme);
      dispatch(changeTheme(theme));
    } catch (e) {
      dispatch(changeTheme('light'));
    }
  };
}

function asyncGetTheme() {
  return async (dispatch: AppDispatch) => {
    try {
      const theme = await AsyncStorage.getItem('theme');
      if (theme) {
        dispatch(changeTheme(theme));
      }
    } catch (e) {
      dispatch(changeTheme('light'));
    }
  };
}

export {ActionType, asyncSetTheme, asyncGetTheme};
