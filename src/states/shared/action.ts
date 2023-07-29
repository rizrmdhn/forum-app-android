import {receiveThread} from '../thread/action';
import {receiveUser} from '../user/action';
import api from '../../utils/api';
import {setIsLoading, unsetIsLoading} from '../isLoading/action';
import {AppDispatch} from '..';
import {IThread, IUser} from '../../types/interface';
import {Alert} from 'react-native';

function asyncPopulateUsersAndThreads() {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading());
    try {
      const users: IUser[] = await api.getAllUsers();
      const threads: IThread[] = await api.getAllThreads();

      dispatch(receiveUser(users));
      dispatch(receiveThread(threads));
    } catch (error: unknown) {
      if (error instanceof Error) {
        return Alert.alert('Error', 'Error');
      }
    }
    dispatch(unsetIsLoading());
  };
}

function asyncGetAllUsers() {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading());
    try {
      const users: IUser[] = await api.getAllUsers();

      dispatch(receiveUser(users));
    } catch (error: unknown) {
      if (error instanceof Error) {
        return Alert.alert('Error', 'Error');
      }
    }
    dispatch(unsetIsLoading());
  };
}

export {asyncPopulateUsersAndThreads, asyncGetAllUsers};
