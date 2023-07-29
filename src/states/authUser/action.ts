import {Alert} from 'react-native';
import {AppDispatch} from '..';
import {IUser} from '../../types/interface';
import api from '../../utils/api';
import {setIsLoading} from '../isLoading/action';
import {IReceiveAuthUserAction, IUnsetAuthUserAction} from './types/interface';
import {asyncSetAuthUserAction, asyncUnsetAuthUserAction} from './types/type';

enum ActionType {
  RECEIVE_AUTH_USER = 'RECEIVE_AUTH_USER',
  UNSET_AUTH_USER = 'UNSET_AUTH_USER',
}

function receiveAuthUser(authUser: IUser): IReceiveAuthUserAction {
  return {
    type: ActionType.RECEIVE_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUser(): IUnsetAuthUserAction {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
}

function asyncSetAuthUser({
  email,
  password,
  navigateTo,
  textLoginSuccess,
  textLoginError,
}: asyncSetAuthUserAction) {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading());

    try {
      await api.login({email, password});
      const authUser: IUser = await api.getOwnProfile();

      dispatch(receiveAuthUser(authUser));
      navigateTo && navigateTo();
      Alert.alert('Success', textLoginSuccess || 'Login success');
    } catch (error: any) {
      Alert.alert('Error', textLoginError || error.message);
    }

    dispatch(setIsLoading());
  };
}

function asyncUnsetAuthUser({textLogoutError, textLogoutSuccess}: asyncUnsetAuthUserAction) {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading());

    try {
      api.putAccessToken('');
      dispatch(unsetAuthUser());
      Alert.alert('Success', textLogoutSuccess || 'Logout success');
    } catch (error: any) {
      Alert.alert('Error', textLogoutError || error.message);
    }

    dispatch(setIsLoading());
  };
}

export {ActionType, receiveAuthUser, asyncSetAuthUser, asyncUnsetAuthUser};
