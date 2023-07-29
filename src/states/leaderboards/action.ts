import {Alert} from 'react-native';
import {ILeaderboard} from '../../types/interface';
import api from '../../utils/api';
import {IReceiveLeaderboardAction} from './types/interface';
import {asyncGetLeaderboardAction} from './types/type';
import {setIsLoading, unsetIsLoading} from '../isLoading/action';

enum ActionType {
  RECEIVE_LEADERBOARD = 'RECEIVE_LEADERBOARD',
}

function receiveLeaderboard(leaderboard: ILeaderboard[]): IReceiveLeaderboardAction {
  return {
    type: ActionType.RECEIVE_LEADERBOARD,
    payload: {
      leaderboard,
    },
  };
}

function asyncGetLeaderboard({textErrorGetLeaderboard}: asyncGetLeaderboardAction) {
  return async (dispatch: any) => {
    dispatch(setIsLoading());
    try {
      const leaderboard: ILeaderboard[] = await api.getLeaderboards();
      dispatch(receiveLeaderboard(leaderboard));
    } catch (error: unknown) {
      if (error instanceof Error) {
        return Alert.alert('Error', textErrorGetLeaderboard || 'Error');
      }
    }
    dispatch(unsetIsLoading());
  };
}

export {ActionType, asyncGetLeaderboard};
