import {AnyAction} from '@reduxjs/toolkit';
import {ISetIsLoadingAction, IUnsetIsLoadingAction} from './interface';

export type IsLoadingState = boolean;

export type Action = ISetIsLoadingAction | IUnsetIsLoadingAction | AnyAction;
