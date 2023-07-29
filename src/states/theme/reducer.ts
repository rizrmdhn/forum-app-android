import {ActionType} from './action';
import {Action, ThemeState} from './types/type';

const initialState: ThemeState = 'light';

export default function themeReducer(state: ThemeState = initialState, action: Action): ThemeState {
  switch (action.type) {
    case ActionType.CHANGE_THEME:
      return action.payload.theme;
    default:
      return state;
  }
}
