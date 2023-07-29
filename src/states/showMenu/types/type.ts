import {AnyAction} from '@reduxjs/toolkit';
import {ISetShowMenuAction, IUnsetShowMenuAction} from './interface';

export type ShowMenuState = boolean;

export type Action = ISetShowMenuAction | IUnsetShowMenuAction | AnyAction;
