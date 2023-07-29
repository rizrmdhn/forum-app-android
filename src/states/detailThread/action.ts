import api from '../../utils/api';
import {AppDispatch, RootState} from '..';
import {Alert} from 'react-native';
import {IComment, IDetailThread} from '../../types/interface';
import {
  ICreateCommentThreadDetailAction,
  IDownVoteCommentThreadDetailAction,
  IDownVoteThreadDetailAction,
  INeutralVoteCommentThreadDetailAction,
  INeutralVoteThreadDetailAction,
  IReceiveThreadsDetailAction,
  IUpVoteCommentThreadDetailAction,
  IUpVoteThreadDetailAction,
} from './types/interface';
import {
  asyncCreateCommentThreadDetailAction,
  asyncDownVoteCommentThreadDetailAction,
  asyncDownVoteThreadDetailAction,
  asyncGetThreadDetailAction,
  asyncNeutralVoteCommentThreadDetailAction,
  asyncNeutralVoteThreadDetailAction,
  asyncUpVoteCommentThreadDetailAction,
  asyncUpVoteThreadDetailAction,
} from './types/type';
import {setIsLoading, unsetIsLoading} from '../isLoading/action';

enum ActionType {
  RECEIVE_THREADS_DETAIL = 'RECEIVE_THREADS_DETAIL',
  UP_VOTE_THREAD_DETAIL = 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL = 'DOWN_VOTE_THREAD_DETAIL',
  NEUTRAL_VOTE_THREAD_DETAIL = 'NEUTRAL_VOTE_THREAD_DETAIL',
  CREATE_COMMENT_THREAD_DETAIL = 'CREATE_COMMENT_THREAD_DETAIL',
  UP_VOTE_COMMENT_THREAD_DETAIL = 'UP_VOTE_COMMENT_THREAD_DETAIL',
  DOWN_VOTE_COMMENT_THREAD_DETAIL = 'DOWN_VOTE_COMMENT_THREAD_DETAIL',
  NEUTRAL_VOTE_COMMENT_THREAD_DETAIL = 'NEUTRAL_VOTE_COMMENT_THREAD_DETAIL',
}

function receiveThreadsDetail(threadDetail: IDetailThread): IReceiveThreadsDetailAction {
  return {
    type: ActionType.RECEIVE_THREADS_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function upVoteThreadDetail(threadId: string, userId: string): IUpVoteThreadDetailAction {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteThreadDetail(threadId: string, userId: string): IDownVoteThreadDetailAction {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralVoteThreadDetail(threadId: string, userId: string): INeutralVoteThreadDetailAction {
  return {
    type: ActionType.NEUTRAL_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function createCommentThreadDetail(
  threadId: string,
  comment: IComment,
): ICreateCommentThreadDetailAction {
  return {
    type: ActionType.CREATE_COMMENT_THREAD_DETAIL,
    payload: {
      threadId,
      comment,
    },
  };
}

function upVoteCommentThreadDetail(
  threadId: string,
  commentId: string,
  userId: string,
): IUpVoteCommentThreadDetailAction {
  return {
    type: ActionType.UP_VOTE_COMMENT_THREAD_DETAIL,
    payload: {
      threadId,
      commentId,
      userId,
    },
  };
}

function downVoteCommentThreadDetail(
  threadId: string,
  commentId: string,
  userId: string,
): IDownVoteCommentThreadDetailAction {
  return {
    type: ActionType.DOWN_VOTE_COMMENT_THREAD_DETAIL,
    payload: {
      threadId,
      commentId,
      userId,
    },
  };
}

function neutralVoteCommentThreadDetail(
  threadId: string,
  commentId: string,
  userId: string,
): INeutralVoteCommentThreadDetailAction {
  return {
    type: ActionType.NEUTRAL_VOTE_COMMENT_THREAD_DETAIL,
    payload: {
      threadId,
      commentId,
      userId,
    },
  };
}

function asyncGetThreadDetail({threadId, textErrorGetThreadDetail}: asyncGetThreadDetailAction) {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading());
    try {
      const threadDetail: IDetailThread = await api.getThreadById(threadId);

      dispatch(receiveThreadsDetail(threadDetail));
    } catch (error: unknown) {
      if (error instanceof Error) {
        return Alert.alert('Error', error.message || textErrorGetThreadDetail);
      }
    }
    dispatch(unsetIsLoading());
  };
}

function asyncUpVoteThreadDetail({
  threadId,
  textErrorUpVote,
  textLoginToVote,
  textUpVoteSuccess,
}: asyncUpVoteThreadDetailAction) {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const {authUser} = getState();
    if (!authUser) {
      Alert.alert('Error', textLoginToVote);
      return;
    }
    dispatch(setIsLoading());
    try {
      await api.upVoteThread(threadId);
      dispatch(upVoteThreadDetail(threadId, authUser.id));
      Alert.alert('Success', textUpVoteSuccess);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return Alert.alert('Error', error.message || textErrorUpVote);
      }
    }
    dispatch(unsetIsLoading());
  };
}

function asyncDownVoteThreadDetail({
  threadId,
  textErrorDownVote,
  textLoginToVote,
  textDownVoteSuccess,
}: asyncDownVoteThreadDetailAction) {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const {authUser} = getState();
    if (!authUser) {
      Alert.alert('Error', textLoginToVote);
      return;
    }
    dispatch(setIsLoading());
    try {
      await api.downVoteThread(threadId);
      dispatch(downVoteThreadDetail(threadId, authUser.id));
      Alert.alert('Success', textDownVoteSuccess);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return Alert.alert('Error', error.message || textErrorDownVote);
      }
    }
    dispatch(unsetIsLoading());
  };
}

function asyncNeutralVoteThreadDetail({
  threadId,
  textRemoveVoteSuccess,
  textLoginToVote,
  textErrorRemoveVote,
}: asyncNeutralVoteThreadDetailAction) {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const {authUser} = getState();
    if (!authUser) {
      Alert.alert('Error', textLoginToVote);
      return;
    }
    dispatch(setIsLoading());
    try {
      await api.neturalVoteThread(threadId);
      dispatch(neutralVoteThreadDetail(threadId, authUser.id));
      Alert.alert('Success', textRemoveVoteSuccess);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return Alert.alert('Error', error.message || textErrorRemoveVote);
      }
    }
    dispatch(unsetIsLoading());
  };
}

function asyncCreateCommentThreadDetail({
  threadId,
  content,
  textCommentCreated,
  textErrorCreateComment,
}: asyncCreateCommentThreadDetailAction) {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading());
    try {
      const comment: IComment = await api.createComment({threadId, content});
      dispatch(createCommentThreadDetail(threadId, comment));
      Alert.alert('Success', textCommentCreated);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return Alert.alert('Error', error.message || textErrorCreateComment);
      }
    }
    dispatch(unsetIsLoading());
  };
}

function asyncUpVoteCommentThreadDetail({
  threadId,
  commentId,
  textErrorUpVote,
  textLoginToVote,
  textUpVoteSuccess,
}: asyncUpVoteCommentThreadDetailAction) {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const {authUser} = getState();
    if (!authUser) {
      Alert.alert('Error', textLoginToVote);
      return;
    }
    dispatch(setIsLoading());
    try {
      await api.upVoteComment({threadId, commentId});
      dispatch(upVoteCommentThreadDetail(threadId, commentId, authUser.id));
      Alert.alert('Success', textUpVoteSuccess);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return Alert.alert('Error', error.message || textErrorUpVote);
      }
    }
    dispatch(unsetIsLoading());
  };
}

function asyncDownVoteCommentThreadDetail({
  threadId,
  commentId,
  textErrorDownVote,
  textLoginToVote,
  textDownVoteSuccess,
}: asyncDownVoteCommentThreadDetailAction) {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const {authUser} = getState();
    if (!authUser) {
      Alert.alert('Error', textLoginToVote);
      return;
    }
    dispatch(setIsLoading());
    try {
      await api.downVoteComment({threadId, commentId});
      dispatch(downVoteCommentThreadDetail(threadId, commentId, authUser.id));
      Alert.alert('Success', textDownVoteSuccess);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return Alert.alert('Error', error.message || textErrorDownVote);
      }
    }
    dispatch(unsetIsLoading());
  };
}

function asyncNeutralVoteCommentThreadDetail({
  threadId,
  commentId,
  textErrorRemoveVote,
  textLoginToVote,
  textRemoveVoteSuccess,
}: asyncNeutralVoteCommentThreadDetailAction) {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const {authUser} = getState();
    if (!authUser) {
      Alert.alert('Error', textLoginToVote || 'Login to vote');
      return;
    }
    dispatch(setIsLoading());
    try {
      await api.neutralVoteComment({threadId, commentId});
      dispatch(neutralVoteCommentThreadDetail(threadId, commentId, authUser.id));
      Alert.alert('Success', textRemoveVoteSuccess || 'Remove vote success');
    } catch (error: unknown) {
      if (error instanceof Error) {
        return Alert.alert('Error', error.message || textErrorRemoveVote);
      }
    }
    dispatch(unsetIsLoading());
  };
}

export {
  ActionType,
  asyncGetThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralVoteThreadDetail,
  asyncCreateCommentThreadDetail,
  asyncUpVoteCommentThreadDetail,
  asyncDownVoteCommentThreadDetail,
  asyncNeutralVoteCommentThreadDetail,
};
