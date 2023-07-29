import {AnyAction} from '@reduxjs/toolkit';
import {IChangeThemeAction} from './interface';

export type ThemeState = string;

export type Action = IChangeThemeAction | AnyAction;
