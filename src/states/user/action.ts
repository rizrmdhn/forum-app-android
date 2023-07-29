import {Alert} from 'react-native';
import {IUser} from '../../types/interface';
import api from '../../utils/api';
import {setIsLoading, unsetIsLoading} from '../isLoading/action';
import {IReceiveUserAction} from './types/interface';
import {asyncRegisterUserAction} from './types/type';
import {AppDispatch} from '..';

enum ActionType {
  RECEIVE_USER = 'RECEIVE_USER',
}

function receiveUser(users: IUser[]): IReceiveUserAction {
  return {
    type: ActionType.RECEIVE_USER,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({
  name,
  email,
  password,
  textRegisterSuccess,
  textErrorRegister,
  routeToLogin,
}: asyncRegisterUserAction) {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading());
    try {
      await api.register({name, email, password});

      Alert.alert('Success', textRegisterSuccess || 'Success');
      routeToLogin && routeToLogin();
    } catch (error: unknown) {
      if (error instanceof Error) {
        return Alert.alert('Error', textErrorRegister || 'Error');
      }
    }
    dispatch(unsetIsLoading());
  };
}

export {ActionType, receiveUser, asyncRegisterUser};
