export interface ISetShowMenuAction {
  type: string;
  payload: {
    showMenu: true;
  };
}

export interface IUnsetShowMenuAction {
  type: string;
  payload: {
    showMenu: false;
  };
}
