import {ActionType} from './action';
import {Action, UserState} from './types/type';

const initialState: UserState = [];

export default function userReducer(state: UserState = initialState, action: Action): UserState {
  switch (action.type) {
    case ActionType.RECEIVE_USER:
      return action.payload.users;
    default:
      return state;
  }
}
