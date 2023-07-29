import {ILeaderboard} from '../../../types/interface';

export interface IReceiveLeaderboardAction {
  type: String;
  payload: {
    leaderboard: ILeaderboard[];
  };
}
