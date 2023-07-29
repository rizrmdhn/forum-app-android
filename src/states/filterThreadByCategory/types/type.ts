import {AnyAction} from '@reduxjs/toolkit';
import {ISetFilterThreadByCategoryAction} from './interface';

export type FilterThreadByCategoryState = string;

export type Action = ISetFilterThreadByCategoryAction | AnyAction;
