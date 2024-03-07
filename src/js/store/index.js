import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import authReducer from '../reducers/auth';
import chatReducer from '../reducers/chat';
import appReducer from '../reducers/app';

import appMiddleware from './middlewares/app';

const middlewares = [thunkMiddleware, appMiddleware];

const reducers = {
  chats: chatReducer,
  auth: authReducer,
  app: appReducer,
};

const store = configureStore({
  reducer: reducers,
  middleware: middlewares,
});

export default store;
