import {AppDispatch} from '..';
import {IUser} from '../../types/interface';
import api from '../../utils/api';
import {receiveAuthUser} from '../authUser/action';
import {setIsLoading, unsetIsLoading} from '../isLoading/action';
import {ISetIsPreloadAction} from './types/interface';
import {asyncSetIsPreloadAction} from './types/type';

enum ActionType {
  SET_IS_PRELOAD = 'SET_IS_PRELOAD',
}

function setIsPreload(isPreload: boolean | null): ISetIsPreloadAction {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

function asyncSetIsPreload({isPreload}: asyncSetIsPreloadAction) {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading());
    try {
      const authUser: IUser = await api.getOwnProfile();
      dispatch(receiveAuthUser(authUser));
    } catch (error: any) {
      dispatch(setIsPreload(null));
    } finally {
      dispatch(setIsPreload(isPreload));
    }
    dispatch(unsetIsLoading());
  };
}

export {ActionType, asyncSetIsPreload};
