import {ActionType} from './action';
import {OpenModalState, Action} from './types/types';

const initialState: OpenModalState = false;

export default function openModalReducer(
  state: OpenModalState = initialState,
  action: Action,
): OpenModalState {
  switch (action.type) {
    case ActionType.OPEN_MODAL:
      return true;
    case ActionType.CLOSE_MODAL:
      return false;
    default:
      return state;
  }
}
