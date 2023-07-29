import {ActionType} from './action';
import {Action, ShowMenuState} from './types/type';

const initialState: ShowMenuState = false;

export default function showMenuReducer(
  state: ShowMenuState = initialState,
  action: Action,
): ShowMenuState {
  switch (action.type) {
    case ActionType.SET_SHOW_MENU:
      return action.payload.showMenu;
    case ActionType.UNSET_SHOW_MENU:
      return action.payload.showMenu;
    default:
      return state;
  }
}
