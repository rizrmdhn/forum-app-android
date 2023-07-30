import {ActionType} from './action';
import {Action, LeaderboardState} from './types/type';

const initialState: LeaderboardState = [];

export default function leaderboardReducer(
  state: LeaderboardState = initialState,
  action: Action,
): LeaderboardState {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARD:
      return action.payload.leaderboard;
    default:
      return state;
  }
}
