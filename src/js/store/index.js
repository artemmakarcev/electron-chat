// import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from '../reducers/auth';
import chatReducer from '../reducers/chat';

export default function configureStore() {
  const middlewares = [thunkMiddleware];

  const reducers = combineReducers({
    chats: chatReducer,
    auth: authReducer,
  });

  const store = createStore(reducers, applyMiddleware(...middlewares));

  // const store = configureStore({
  //   reducer,
  //   middlewares: applyMiddleware(...middlewares),
  // });

  return store;
}
