/* import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

export default function configureStore() {
  // const middlewares = [thunk];

  const store = createStore(() => {
    return {
      message: 'Hello World!',
      data1: 'Sun Mar 26 2023 17:01:36 GMT+0500 (Yekaterinburg Standard Time)',
      data2: 'Sun Feb 13 2022 08:20:35 GMT+0500 (Yekaterinburg Standard Time)',
    };
  }, applyMiddleware(thunk));
  return store;
} */

import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import chatReducer from '../reducers/chatReducer';

const rootRedicer = {
  reducer: {
    chats: chatReducer,
  },
};

//combineReducers автоматически применяется в configureStore
export const store = configureStore(rootRedicer, composeWithDevTools(applyMiddleware(thunk)));
