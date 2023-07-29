import {ActionType} from './action';
import {Action, IsPreloadState} from './types/type';

const initialState: IsPreloadState = null;

export default function isPreloadReducer(
  state: IsPreloadState = initialState,
  action: Action,
): IsPreloadState {
  switch (action.type) {
    case ActionType.SET_IS_PRELOAD:
      return action.payload.isPreload;
    default:
      return state;
  }
}
