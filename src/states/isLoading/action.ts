import {ISetIsLoadingAction, IUnsetIsLoadingAction} from './types/interface';

enum ActionType {
  SET_IS_LOADING = 'SET_IS_LOADING',
  UNSET_IS_LOADING = 'UNSET_IS_LOADING',
}

function setIsLoading(): ISetIsLoadingAction {
  return {
    type: ActionType.SET_IS_LOADING,
    payload: {
      isLoading: true,
    },
  };
}

function unsetIsLoading(): IUnsetIsLoadingAction {
  return {
    type: ActionType.UNSET_IS_LOADING,
    payload: {
      isLoading: false,
    },
  };
}

export {ActionType, setIsLoading, unsetIsLoading};
