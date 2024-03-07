import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import authReducer from '../reducers/auth';
import chatReducer from '../reducers/chat';

const middlewares = [thunkMiddleware];

const reducers = {
  chats: chatReducer,
  auth: authReducer,
};

const store = configureStore({
  reducer: reducers,
  middleware: middlewares,
});

export default store;
