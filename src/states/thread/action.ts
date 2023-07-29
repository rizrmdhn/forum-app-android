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

function asyncCreateThread({title, body, category}: asyncCreateThreadAction) {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading());
    try {
      const thread: IThread = await api.createThread({title, body, category});
      dispatch(createThread(thread));

      Alert.alert('Success', 'Create thread success');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
    dispatch(setIsLoading());
  };
}

function asyncUpVoteThread({threadId}: asyncUpVoteThreadAction) {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setIsLoading());
    const {authUser} = getState();
    if (!authUser) {
      Alert.alert('Error', 'Please login to vote');
      return;
    }

    dispatch(upVoteThread(threadId, authUser.id));
    try {
      await api.upVoteThread(threadId);

      Alert.alert('Success', 'Up vote success');
    } catch (error: any) {
      dispatch(downVoteThread(threadId, authUser.id));
      Alert.alert('Error', error.message);
    }

    dispatch(setIsLoading());
  };
}

function asyncDownVoteThread({threadId}: asyncDownVoteThreadAction) {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setIsLoading());
    const {authUser} = getState();
    if (!authUser) {
      Alert.alert('Error', 'Please login to vote');
      return;
    }

    dispatch(downVoteThread(threadId, authUser.id));
    try {
      await api.downVoteThread(threadId);

      Alert.alert('Success', 'You have successfully down voted this thread');
    } catch (error: any) {
      dispatch(upVoteThread(threadId, authUser.id));
      Alert.alert('Error', error.message);
    }

    dispatch(setIsLoading());
  };
}

function asyncNeturalVoteThread({threadId}: asyncNeturalVoteThreadAction) {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setIsLoading());
    const {authUser} = getState();
    if (!authUser) {
      Alert.alert('Error', 'Please login to vote');
      return;
    }

    dispatch(neturealVoteThread(threadId, authUser.id));
    try {
      await api.neturalVoteThread(threadId);

      Alert.alert('Success', 'You have successfully netural voted this thread');
    } catch (error: any) {
      dispatch(upVoteThread(threadId, authUser.id));
      Alert.alert('Error', error.message);
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
