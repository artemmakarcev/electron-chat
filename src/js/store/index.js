import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import authReducer from '../reducers/auth';
import chatReducer from '../reducers/chat';
import appReducer from '../reducers/app';
import settingsReducer from '../reducers/settings';

import appMiddleware from './middlewares/app';

const middlewares = [thunkMiddleware, appMiddleware];

const mainReducer = combineReducers({
  chats: chatReducer,
  auth: authReducer,
  app: appReducer,
  settings: settingsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'AUTH_LOGOUT_SUCCESS') {
    Object.keys(state).forEach(sk => {
      if (state[sk].savable) {
        return;
      }
      state[sk] = undefined;
    });
  }
  return mainReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

export default store;
