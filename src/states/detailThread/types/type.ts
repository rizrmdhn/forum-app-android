import {AnyAction} from '@reduxjs/toolkit';
import {
  IReceiveThreadsDetailAction,
  ICreateCommentThreadDetailAction,
  IDownVoteCommentThreadDetailAction,
  INeutralVoteCommentThreadDetailAction,
  INeutralVoteThreadDetailAction,
  IUpVoteCommentThreadDetailAction,
  IDownVoteThreadDetailAction,
  IUpVoteThreadDetailAction,
} from './interface';
import {IDetailThread} from '../../../types/interface';

export type DetailThreadState = null | IDetailThread;

export type Action =
  | IReceiveThreadsDetailAction
  | ICreateCommentThreadDetailAction
  | IDownVoteCommentThreadDetailAction
  | INeutralVoteCommentThreadDetailAction
  | INeutralVoteThreadDetailAction
  | IUpVoteCommentThreadDetailAction
  | IDownVoteThreadDetailAction
  | IUpVoteThreadDetailAction
  | AnyAction;

export type asyncGetThreadDetailAction = {
  threadId: string;
  textErrorGetThreadDetail?: string;
};

export type asyncUpVoteThreadDetailAction = {
  threadId: string;
  textLoginToVote?: string;
  textUpVoteSuccess?: string;
  textErrorUpVote?: string;
};

export type asyncDownVoteThreadDetailAction = {
  threadId: string;
  textLoginToVote?: string;
  textDownVoteSuccess?: string;
  textErrorDownVote?: string;
};

export type asyncNeutralVoteThreadDetailAction = {
  threadId: string;
  textLoginToVote?: string;
  textRemoveVoteSuccess?: string;
  textErrorRemoveVote?: string;
};

export type asyncCreateCommentThreadDetailAction = {
  threadId: string;
  content: string;
  textCommentCreated?: string;
  textErrorCreateComment?: string;
};

export type asyncUpVoteCommentThreadDetailAction = {
  threadId: string;
  commentId: string;
  textLoginToVote?: string;
  textUpVoteSuccess?: string;
  textErrorUpVote?: string;
};

export type asyncDownVoteCommentThreadDetailAction = {
  threadId: string;
  commentId: string;
  textLoginToVote?: string;
  textDownVoteSuccess?: string;
  textErrorDownVote?: string;
};

export type asyncNeutralVoteCommentThreadDetailAction = {
  threadId: string;
  commentId: string;
  textLoginToVote?: string;
  textRemoveVoteSuccess?: string;
  textErrorRemoveVote?: string;
};
