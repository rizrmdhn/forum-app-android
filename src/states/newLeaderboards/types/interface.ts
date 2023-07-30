import {INewLeaderboard} from '../../../types/interface';

export interface IReceiveNewLeaderboardsAction {
  type: string;
  payload: {
    newLeaderboards: INewLeaderboard[];
  };
}
