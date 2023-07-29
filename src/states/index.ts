import {configureStore} from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import filterThreadByCategoryReducer from './filterThreadByCategory/reducer';
import filterThreadByTitleReducer from './filterThreadByTitle/reducer';
import threadReducer from './thread/reducer';
import detailThreadReducer from './detailThread/reducer';
import leaderboardReducer from './leaderboards/reducer';
import userReducer from './user/reducer';
import localeReducer from './locale/reducer';
import openModalReducer from './openModal/reducer';
import showCategoryReducer from './showCategory/reducer';
import showMenuReducer from './showMenu/reducer';
import isLoadingReducer from './isLoading/reducer';
import isPreloadReducer from './isPreload/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    filterThreadByCategory: filterThreadByCategoryReducer,
    filterThreadByTitle: filterThreadByTitleReducer,
    thread: threadReducer,
    detailThread: detailThreadReducer,
    leaderboard: leaderboardReducer,
    user: userReducer,
    locale: localeReducer,
    openModal: openModalReducer,
    showCategory: showCategoryReducer,
    showMenu: showMenuReducer,
    isLoading: isLoadingReducer,
    isPreload: isPreloadReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
