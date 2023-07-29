import {AnyAction} from '@reduxjs/toolkit';
import {IReceiveAuthUserAction, IUnsetAuthUserAction} from './interface';
import {IUser} from '../../../types/interface';

export type AuthUserState = IUser | null;

export type Action = IReceiveAuthUserAction | IUnsetAuthUserAction | AnyAction;

export type asyncSetAuthUserAction = {
  email: string;
  password: string;
  navigateTo?: () => void;
  textLoginSuccess?: string;
  textLoginError?: string;
};

export type asyncUnsetAuthUserAction = {
  textLogoutSuccess?: string;
  textLogoutError?: string;
};
