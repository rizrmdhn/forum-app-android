import {AnyAction} from '@reduxjs/toolkit';
import {ISetLocaleAction} from './interface';

export type LocaleState = string;

export type Action = ISetLocaleAction | AnyAction;
