import {AnyAction} from '@reduxjs/toolkit';
import {ICloseModalAction, IOpenModalAction} from './interface';

export type OpenModalState = boolean;

export type Action = IOpenModalAction | ICloseModalAction | AnyAction;
