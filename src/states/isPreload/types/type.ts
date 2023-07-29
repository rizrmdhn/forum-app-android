import {AnyAction} from '@reduxjs/toolkit';
import {ISetIsPreloadAction} from './interface';

export type IsPreloadState = null | boolean;

export type Action = ISetIsPreloadAction | AnyAction;

export type asyncSetIsPreloadAction = {
  isPreload: null | boolean;
};
