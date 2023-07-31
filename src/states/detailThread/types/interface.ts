import {IComment, IDetailThread} from '../../../types/interface';

export interface IReceiveThreadsDetailAction {
  type: string;
  payload: {
    threadDetail: IDetailThread;
  };
}

export interface ISetThreadsDetailToNullAction {
  type: string;
  payload: {
    threadDetail: null;
  };
}

export interface IUpVoteThreadDetailAction {
  type: string;
  payload: {
    threadId: string;
    userId: string;
  };
}

export interface IDownVoteThreadDetailAction {
  type: string;
  payload: {
    threadId: string;
    userId: string;
  };
}

export interface INeutralVoteThreadDetailAction {
  type: string;
  payload: {
    threadId: string;
    userId: string;
  };
}

export interface ICreateCommentThreadDetailAction {
  type: string;
  payload: {
    threadId: string;
    comment: IComment;
  };
}

export interface IUpVoteCommentThreadDetailAction {
  type: string;
  payload: {
    threadId: string;
    commentId: string;
    userId: string;
  };
}

export interface IDownVoteCommentThreadDetailAction {
  type: string;
  payload: {
    threadId: string;
    commentId: string;
    userId: string;
  };
}

export interface INeutralVoteCommentThreadDetailAction {
  type: string;
  payload: {
    threadId: string;
    commentId: string;
    userId: string;
  };
}
