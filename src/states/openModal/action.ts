import {IOpenModalAction, ICloseModalAction} from './types/interface';

enum ActionType {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
}

function openModalActionCreator(): IOpenModalAction {
  return {
    type: ActionType.OPEN_MODAL,
    payload: {
      modal: true,
    },
  };
}

function closeModalActionCreator(): ICloseModalAction {
  return {
    type: ActionType.CLOSE_MODAL,
    payload: {
      modal: false,
    },
  };
}

export {ActionType, openModalActionCreator, closeModalActionCreator};
