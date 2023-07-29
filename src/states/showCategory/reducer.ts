import {ActionType} from './action';
import {Action, ShowCategoryState} from './types/type';

const initialState: ShowCategoryState = false;

export default function showCategoryReducer(
  state: ShowCategoryState = initialState,
  action: Action,
): ShowCategoryState {
  switch (action.type) {
    case ActionType.SET_SHOW_CATEGORY:
      return action.payload.showCategory;
    default:
      return state;
  }
}
