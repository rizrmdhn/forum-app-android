import {ActionType} from './action';
import {Action, LocaleState} from './types/type';

const initialState: LocaleState = 'id';

export default function localeReducer(
  state: LocaleState = initialState,
  action: Action,
): LocaleState {
  switch (action.type) {
    case ActionType.SET_LOCALE:
      return action.payload.locale;
    default:
      return state;
  }
}
