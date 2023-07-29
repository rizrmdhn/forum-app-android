import {AnyAction} from '@reduxjs/toolkit';
import {
  IReceiveThreadsAction,
  ICreateThreadAction,
  IDownVoteThreadAction,
  INeturalVoteThreadAction,
  IUpVoteThreadAction,
} from './interface';

export type Action =
  | IReceiveThreadsAction
  | ICreateThreadAction
  | IUpVoteThreadAction
  | IDownVoteThreadAction
  | INeturalVoteThreadAction
  | AnyAction;

export type asyncCreateThreadAction = {
  title: string;
  body: string;
  category: string;
  textThreadCreated?: string;
  textErrorCreateThread?: string;
};
export type asyncUpVoteThreadAction = {
  threadId: string;
  textLoginToVote?: string;
  textUpVoteSuccess?: string;
  textErrorUpVote?: string;
};

export type asyncDownVoteThreadAction = {
  threadId: string;
  textLoginToVote?: string;
  textDownVoteSuccess?: string;
  textErrorDownVote?: string;
};

export type asyncNeturalVoteThreadAction = {
  threadId: string;
  textLoginToVote?: string;
  textRemoveVoteSuccess?: string;
  textErrorRemoveVote?: string;
};
