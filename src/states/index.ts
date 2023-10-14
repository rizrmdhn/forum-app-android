import {AnyAction, configureStore} from '@reduxjs/toolkit';
import thunk, {ThunkDispatch} from 'redux-thunk';
import authUserReducer from './authUser/reducer';
import filterThreadByCategoryReducer from './filterThreadByCategory/reducer';
import filterThreadByTitleReducer from './filterThreadByTitle/reducer';
import threadReducer from './thread/reducer';
import detailThreadReducer from './detailThread/reducer';
import leaderboardReducer from './leaderboards/reducer';
import newLeaderboardsReducer from './newLeaderboards/reducer';
import userReducer from './user/reducer';
import localeReducer from './locale/reducer';
import openModalReducer from './openModal/reducer';
import showCategoryReducer from './showCategory/reducer';
import showMenuReducer from './showMenu/reducer';
import isLoadingReducer from './isLoading/reducer';
import isPreloadReducer from './isPreload/reducer';
import themeReducer from './theme/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    category: filterThreadByCategoryReducer,
    filterThreadByTitle: filterThreadByTitleReducer,
    thread: threadReducer,
    detailThread: detailThreadReducer,
    leaderboard: leaderboardReducer,
    newLeaderboard: newLeaderboardsReducer,
    user: userReducer,
    locale: localeReducer,
    openModal: openModalReducer,
    showCategory: showCategoryReducer,
    showMenu: showMenuReducer,
    isLoading: isLoadingReducer,
    isPreload: isPreloadReducer,
    theme: themeReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

export default store;
