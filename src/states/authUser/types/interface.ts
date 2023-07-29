import {IUser} from '../../../types/interface';

export interface IReceiveAuthUserAction {
  type: string;
  payload: {
    authUser: IUser;
  };
}

export interface IUnsetAuthUserAction {
  type: string;
  payload: {
    authUser: null;
  };
}

