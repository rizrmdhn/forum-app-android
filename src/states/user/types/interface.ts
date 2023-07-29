import {IUser} from '../../../types/interface';

export interface IReceiveUserAction {
  type: string;
  payload: {
    users: IUser[];
  };
}
