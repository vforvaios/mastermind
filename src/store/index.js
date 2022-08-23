import { configureStore } from '@reduxjs/toolkit';
import rootEpics from 'models/epics/rootEpics';
import gameReducer from 'models/reducers/gameReducer';
import { combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: 'state',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    gameReducer,
  }),
);

const epicMiddleWare = createEpicMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: [epicMiddleWare],
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(epicMiddleWare),
  devTools: process.env.NODE_ENV !== 'production',
});

epicMiddleWare.run(rootEpics);
export default store;
