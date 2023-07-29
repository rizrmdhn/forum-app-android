import {AnyAction} from '@reduxjs/toolkit';
import {IReceiveLeaderboardAction} from './interface';
import {ILeaderboard} from '../../../types/interface';

export type LeaderboardState = ILeaderboard[];

export type Action = IReceiveLeaderboardAction | AnyAction;

export type asyncGetLeaderboardAction = {
  textErrorGetLeaderboard?: string;
};
