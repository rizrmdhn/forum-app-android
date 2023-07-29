import {ISetShowMenuAction, IUnsetShowMenuAction} from './types/interface';

enum ActionType {
  SET_SHOW_MENU = 'SET_SHOW_MENU',
  UNSET_SHOW_MENU = 'UNSET_SHOW_MENU',
}

function setShowMenu(): ISetShowMenuAction {
  return {
    type: ActionType.SET_SHOW_MENU,
    payload: {
      showMenu: true,
    },
  };
}

function unsetShowMenu(): IUnsetShowMenuAction {
  return {
    type: ActionType.UNSET_SHOW_MENU,
    payload: {
      showMenu: false,
    },
  };
}

export {setShowMenu, unsetShowMenu, ActionType};
