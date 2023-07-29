import api from '../../utils/api';
import {AppDispatch, RootState} from '..';
import {IThread} from '../../types/interface';
import {
  ICreateThreadAction,
  IDownVoteThreadAction,
  INeturalVoteThreadAction,
  IReceiveThreadsAction,
  IUpVoteThreadAction,
} from './types/interface';
import {
  asyncCreateThreadAction,
  asyncDownVoteThreadAction,
  asyncNeturalVoteThreadAction,
  asyncUpVoteThreadAction,
} from './types/type';
import {setIsLoading} from '../isLoading/action';
import {Alert} from 'react-native';

enum ActionType {
  RECEIVE_THREAD = 'RECEIVE_THREAD',
  CREATE_THREAD = 'CREATE_THREAD',
  UP_VOTE_THREAD = 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD = 'DOWN_VOTE_THREAD',
  NETURAL_VOTE_THREAD = 'NETURAL_VOTE_THREAD',
}

function receiveThread(threads: IThread[]): IReceiveThreadsAction {
  return {
    type: ActionType.RECEIVE_THREAD,
    payload: {
      threads,
    },
  };
}

function createThread(thread: IThread): ICreateThreadAction {
  return {
    type: ActionType.CREATE_THREAD,
    payload: {
      thread,
    },
  };
}

function upVoteThread(threadId: string, userId: string): IUpVoteThreadAction {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteThread(threadId: string, userId: string): IDownVoteThreadAction {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function neturealVoteThread(threadId: string, userId: string): INeturalVoteThreadAction {
  return {
    type: ActionType.NETURAL_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncCreateThread({
  title,
  body,
  category,
  textErrorCreateThread,
  textThreadCreated,
}: asyncCreateThreadAction) {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading());
    try {
      const thread: IThread = await api.createThread({title, body, category});
      dispatch(createThread(thread));

      Alert.alert('Success', textThreadCreated || 'You have successfully created a new thread');
    } catch (error: unknown) {
      if (error instanceof Error) {
        return Alert.alert('Error', textErrorCreateThread || 'Error');
      }
    }
    dispatch(setIsLoading());
  };
}

function asyncUpVoteThread({
  threadId,
  textErrorUpVote,
  textLoginToVote,
  textUpVoteSuccess,
}: asyncUpVoteThreadAction) {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setIsLoading());
    const {authUser} = getState();
    if (!authUser) {
      Alert.alert('Error', textLoginToVote || 'Please login to vote');
      return;
    }

    dispatch(upVoteThread(threadId, authUser.id));
    try {
      await api.upVoteThread(threadId);

      Alert.alert('Success', textUpVoteSuccess || 'You have successfully up voted this thread');
    } catch (error: unknown) {
      if (error instanceof Error) {
        return Alert.alert('Error', textErrorUpVote || 'Error');
      }
    }

    dispatch(setIsLoading());
  };
}

function asyncDownVoteThread({
  threadId,
  textDownVoteSuccess,
  textErrorDownVote,
  textLoginToVote,
}: asyncDownVoteThreadAction) {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setIsLoading());
    const {authUser} = getState();
    if (!authUser) {
      Alert.alert('Error', textLoginToVote || 'Please login to vote');
      return;
    }

    dispatch(downVoteThread(threadId, authUser.id));
    try {
      await api.downVoteThread(threadId);

      Alert.alert('Success', textDownVoteSuccess || 'You have successfully down voted this thread');
    } catch (error: unknown) {
      if (error instanceof Error) {
        return Alert.alert('Error', textErrorDownVote || 'Error');
      }
    }

    dispatch(setIsLoading());
  };
}

function asyncNeturalVoteThread({
  threadId,
  textErrorRemoveVote,
  textLoginToVote,
  textRemoveVoteSuccess,
}: asyncNeturalVoteThreadAction) {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setIsLoading());
    const {authUser} = getState();
    if (!authUser) {
      Alert.alert('Error', textLoginToVote || 'Please login to vote');
      return;
    }

    dispatch(neturealVoteThread(threadId, authUser.id));
    try {
      await api.neturalVoteThread(threadId);

      Alert.alert('Success', textRemoveVoteSuccess || 'You have successfully remove your vote');
    } catch (error: unknown) {
      if (error instanceof Error) {
        return Alert.alert('Error', textErrorRemoveVote || 'Error');
      }
    }

    dispatch(setIsLoading());
  };
}

export {
  ActionType,
  receiveThread,
  asyncCreateThread,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeturalVoteThread,
};
