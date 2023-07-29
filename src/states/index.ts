import {configureStore} from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import threadReducer from './thread/reducer';
import detailThreadReducer from './detailThread/reducer';
import openModalReducer from './openModal/reducer';
import isLoadingReducer from './isLoading/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    thread: threadReducer,
    detailThread: detailThreadReducer,
    openModal: openModalReducer,
    isLoading: isLoadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
