import {Alert} from 'react-native';
import {IUser} from '../../types/interface';
import api from '../../utils/api';
import {setIsLoading, unsetIsLoading} from '../isLoading/action';
import {IReceiveUserAction} from './types/interface';
import {asyncRegisterUserAction} from './types/type';

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
  return async (dispatch: any) => {
    dispatch(setIsLoading());
    try {
      await api.register({name, email, password});

      Alert.alert('Success', textRegisterSuccess || 'Success');
      routeToLogin && routeToLogin();
    } catch (error: any) {
      Alert.alert('Error', textErrorRegister || 'Error');
    }
    dispatch(unsetIsLoading());
  };
}

export {ActionType, receiveUser, asyncRegisterUser};
