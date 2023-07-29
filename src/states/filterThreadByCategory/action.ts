import {ISetFilterThreadByCategoryAction} from './types/interface';

enum ActionType {
  SET_FILTER_THREAD_BY_CATEGORY = 'SET_FILTER_THREAD_BY_CATEGORY',
}

function setFilterThreadByCategory(
  filterThreadByCategory: string,
): ISetFilterThreadByCategoryAction {
  return {
    type: ActionType.SET_FILTER_THREAD_BY_CATEGORY,
    payload: {
      filterThreadByCategory,
    },
  };
}

export {ActionType, setFilterThreadByCategory};
