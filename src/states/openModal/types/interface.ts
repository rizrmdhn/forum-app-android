export interface IOpenModalAction {
  type: string;
  payload: {
    modal: boolean;
  };
}

export interface ICloseModalAction {
  type: string;
  payload: {
    modal: boolean;
  };
}
