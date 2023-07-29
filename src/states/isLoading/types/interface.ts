export interface ISetIsLoadingAction {
  type: string;
  payload: {
    isLoading: true;
  };
}

export interface IUnsetIsLoadingAction {
  type: string;
  payload: {
    isLoading: false;
  };
}


