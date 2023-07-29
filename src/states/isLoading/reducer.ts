import {ActionType} from './action';
import {Action, IsLoadingState} from './types/type';

const initialState: IsLoadingState = false;

export default function isLoadingReducer(
  state: IsLoadingState = initialState,
  action: Action,
): IsLoadingState {
  switch (action.type) {
    case ActionType.SET_IS_LOADING:
      return true;
    case ActionType.UNSET_IS_LOADING:
      return false;
    default:
      return state;
  }
}

