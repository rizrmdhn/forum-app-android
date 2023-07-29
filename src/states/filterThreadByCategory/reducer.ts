import {ActionType} from './action';
import {Action, FilterThreadByCategoryState} from './types/type';

const initialState: FilterThreadByCategoryState = '';

export default function filterThreadByCategoryReducer(
  state: FilterThreadByCategoryState = initialState,
  action: Action,
): FilterThreadByCategoryState {
  switch (action.type) {
    case ActionType.SET_FILTER_THREAD_BY_CATEGORY:
      return action.payload.filterThreadByCategory;
    default:
      return state;
  }
}
