import {INewLeaderboard} from '../../types/interface';

enum ActionType {
  RECEIVE_NEW_LEADERBOARDS = 'RECEIVE_NEW_LEADERBOARDS',
}

function receiveNewLeaderboards(newLeaderboards: INewLeaderboard[]) {
  return {
    type: ActionType.RECEIVE_NEW_LEADERBOARDS,
    payload: {
      newLeaderboards,
    },
  };
}

export {ActionType, receiveNewLeaderboards};
