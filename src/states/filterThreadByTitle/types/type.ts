import {AnyAction} from '@reduxjs/toolkit';
import {ISetFilterThreadByTitleAction} from './interface';

export type FilterThreadByTitleState = string;

export type Action = ISetFilterThreadByTitleAction | AnyAction;
