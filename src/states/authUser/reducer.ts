import {ActionType} from './action';
import {Action, AuthUserState} from './types/type';

const initialState: AuthUserState = null;

export default function authUserReducer(
  state: AuthUserState = initialState,
  action: Action,
): AuthUserState {
  switch (action.type) {
    case ActionType.RECEIVE_AUTH_USER:
      return action.payload.authUser;
    case ActionType.UNSET_AUTH_USER:
      return null;
    default:
      return state;
  }
}
