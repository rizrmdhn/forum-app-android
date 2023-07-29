import {AnyAction} from '@reduxjs/toolkit';
import {IReceiveUserAction} from './interface';
import {IUser} from '../../../types/interface';

export type UserState = IUser[];

export type Action = IReceiveUserAction | AnyAction;

export type asyncRegisterUserAction = {
  name: string;
  email: string;
  password: string;
  textRegisterSuccess?: string;
  textErrorRegister?: string;
  routeToLogin?: () => void;
};
