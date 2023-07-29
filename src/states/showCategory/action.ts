import {ISetShowCategoryAction} from './types/interface';

enum ActionType {
  SET_SHOW_CATEGORY = 'SET_SHOW_CATEGORY',
}

function setShowCategory(showCategory: boolean): ISetShowCategoryAction {
  return {
    type: ActionType.SET_SHOW_CATEGORY,
    payload: {
      showCategory,
    },
  };
}

export {setShowCategory, ActionType};
