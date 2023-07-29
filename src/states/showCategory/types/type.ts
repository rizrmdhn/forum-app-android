import {AnyAction} from '@reduxjs/toolkit';
import {ISetShowCategoryAction} from './interface';

export type ShowCategoryState = boolean;

export type Action = ISetShowCategoryAction | AnyAction;
