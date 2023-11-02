/* import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import chatReducer from '../reducers/chatReducer';

const rootRedicer = {
  reducer: {
    chats: chatReducer,
    auth: authReducer,
  },
};

// const middlewares = [thunkMiddleware];

//combineReducers автоматически применяется в configureStore
// export const store = configureStore(rootRedicer, applyMiddleware(...middlewares));
export const store = configureStore(rootRedicer, applyMiddleware(thunkMiddleware));
 */

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import chatReducer from '../reducers/chatReducer';

export default function configureStore() {
  const middlewares = [thunkMiddleware];

  const store = createStore(
    combineReducers({
      chats: chatReducer,
      auth: authReducer,
    }),
    applyMiddleware(...middlewares),
  );

  return store;
}
