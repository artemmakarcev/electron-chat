const AUTH_LOGIN = 'AUTH_LOGIN';
const AUTH_REGISTER = 'AUTH_REGISTER';
const AUTH_ON_ERROR = 'AUTH_ON_ERROR';
const AUTH_ON_INIT = 'AUTH_ON_INIT';
const AUTH_ON_SUCCESS = 'AUTH_ON_SUCCESS';
const AUTH_ON = 'AUTH_ON';

import { combineReducers } from 'redux';
import { createErrorReducer, createIsFetchingReducer } from './common';

const createLoginReducer = () =>
  combineReducers({
    isChecking: createIsFetchingReducer(AUTH_LOGIN),
    error: createErrorReducer(AUTH_LOGIN),
  });

const createRegisterReducer = () =>
  combineReducers({
    isChecking: createIsFetchingReducer(AUTH_REGISTER),
    error: createErrorReducer(AUTH_REGISTER),
  });

function createAuthReducer() {
  const user = (state = null, action) => {
    switch (action.type) {
      case AUTH_ON_ERROR:
      case AUTH_ON_INIT:
        return null;
      case AUTH_ON_SUCCESS:
        return action.user;
      default:
        return state;
    }
  };

  return combineReducers({
    user,
    isChecking: createIsFetchingReducer(AUTH_ON),
    login: createLoginReducer(),
    register: createRegisterReducer(),
  });
}

export default createAuthReducer();
