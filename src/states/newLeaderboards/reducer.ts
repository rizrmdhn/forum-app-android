import {INewLeaderboard} from '../../types/interface';
import {ActionType} from './action';
import {Action} from './types/type';

const initialState: INewLeaderboard[] = [];

export default function newLeaderboardsReducer(
  state: INewLeaderboard[] = initialState,
  action: Action,
): INewLeaderboard[] {
  switch (action.type) {
    case ActionType.RECEIVE_NEW_LEADERBOARDS:
      return action.payload.newLeaderboards;
    default:
      return state;
  }
}
