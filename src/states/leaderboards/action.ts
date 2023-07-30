import {Alert} from 'react-native';
import {ILeaderboard, INewLeaderboard} from '../../types/interface';
import api from '../../utils/api';
import {IReceiveLeaderboardAction} from './types/interface';
import {asyncGetLeaderboardAction} from './types/type';
import {setIsLoading, unsetIsLoading} from '../isLoading/action';
import {AppDispatch} from '..';
import {asyncCheckIfImageContainSvg} from '../isSvg/action';

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
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading());
    try {
      const leaderboard: ILeaderboard[] = await api.getLeaderboards();
      for (const item of leaderboard) {
        const isSvg = await asyncCheckIfImageContainSvg(item.user.avatar);
        item.isSvg = isSvg;
      }
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
