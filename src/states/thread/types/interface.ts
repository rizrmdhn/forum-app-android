import {IThread} from '../../../types/interface';

export interface IReceiveThreadsAction {
  type: string;
  payload: {
    threads: IThread[];
  };
}

export interface ICreateThreadAction {
  type: string;
  payload: {
    thread: IThread;
  };
}

export interface IUpVoteThreadAction {
  type: string;
  payload: {
    threadId: string;
    userId: string;
  };
}

export interface IDownVoteThreadAction {
  type: string;
  payload: {
    threadId: string;
    userId: string;
  };
}

export interface INeturalVoteThreadAction {
  type: string;
  payload: {
    threadId: string;
    userId: string;
  };
}
