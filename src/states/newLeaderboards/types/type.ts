import {AnyAction} from '@reduxjs/toolkit';
import {IReceiveNewLeaderboardsAction} from './interface';

export type Action = IReceiveNewLeaderboardsAction | AnyAction;
