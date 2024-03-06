// import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import chatReducer from '../reducers/chatReducer';

export default function configureStore() {
  const middlewares = [thunkMiddleware];

  const reducer = combineReducers({
    chats: chatReducer,
    auth: authReducer,
  });

  const store = createStore(reducer, applyMiddleware(...middlewares));

  // const store = configureStore({
  //   reducer,
  //   middlewares: applyMiddleware(...middlewares),
  // });

  return store;
}
