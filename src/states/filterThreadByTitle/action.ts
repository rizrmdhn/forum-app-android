import {ISetFilterThreadByTitleAction} from './types/interface';

enum ActionType {
  SET_FILTER_THREAD_BY_TITLE = 'SET_FILTER_THREAD_BY_TITLE',
}

function setFilterThreadByTitle(filterThreadByTitle: string): ISetFilterThreadByTitleAction {
  return {
    type: ActionType.SET_FILTER_THREAD_BY_TITLE,
    payload: {
      filterThreadByTitle,
    },
  };
}

export {ActionType, setFilterThreadByTitle};
