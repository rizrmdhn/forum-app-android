import {ActionType} from './action';
import {Action, FilterThreadByTitleState} from './types/type';

const initialState: FilterThreadByTitleState = '';

export default function filterThreadByTitleReducer(
  state: FilterThreadByTitleState = initialState,
  action: Action,
): FilterThreadByTitleState {
  switch (action.type) {
    case ActionType.SET_FILTER_THREAD_BY_TITLE:
      return action.payload.filterThreadByTitle;
    default:
      return state;
  }
}
