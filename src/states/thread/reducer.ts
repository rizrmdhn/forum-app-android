import {IThread} from '../../types/interface';
import {ActionType} from './action';
import {Action} from './types/type';

const initialState: IThread[] = [];

export default function threadReducer(state: IThread[] = initialState, action: Action): IThread[] {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD:
      return action.payload.threads;
    case ActionType.CREATE_THREAD:
      return [...state, action.payload.thread];
    case ActionType.UP_VOTE_THREAD:
      return state.map(thread => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotes: [...thread.upVotesBy, action.payload.userId],
          };
        }
        return thread;
      });
    case ActionType.DOWN_VOTE_THREAD:
      return state.map(thread => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            downVotes: [...thread.downVotesBy, action.payload.userId],
          };
        }
        return thread;
      });
    case ActionType.NETURAL_VOTE_THREAD:
      return state.map(thread => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotes: thread.upVotesBy.filter(userId => userId !== action.payload.userId),
          };
        }
        return thread;
      });
    default:
      return state;
  }
}
