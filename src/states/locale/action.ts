import {AppDispatch} from '..';
import {ISetLocaleAction} from './types/interface';
import AsyncStorage from '@react-native-async-storage/async-storage';

enum ActionType {
  SET_LOCALE = 'SET_LOCALE',
}

function setLocale(locale: string): ISetLocaleAction {
  return {
    type: ActionType.SET_LOCALE,
    payload: {
      locale,
    },
  };
}

function asyncSetLocale(locale: string) {
  return async (dispatch: AppDispatch) => {
    try {
      await AsyncStorage.setItem('locale', locale);
      dispatch(setLocale(locale));
    } catch (e) {
      dispatch(setLocale('id'));
    }
  };
}

function asyncGetLocale() {
  return async (dispatch: AppDispatch) => {
    try {
      const locale = await AsyncStorage.getItem('locale');
      if (locale) {
        dispatch(setLocale(locale));
      }
    } catch (e) {
      dispatch(setLocale('en'));
    }
  };
}

export {ActionType, asyncSetLocale, asyncGetLocale};
