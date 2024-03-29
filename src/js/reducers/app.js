const APP_IS_ONLINE = 'APP_IS_ONLINE';
const APP_IS_OFFLINE = 'APP_IS_OFFLINE';

import { combineReducers } from 'redux';

function createAppReducer() {
  const { onLine } = navigator;

  const isOnline = (state = onLine, action) => {
    switch (action.type) {
      case APP_IS_ONLINE:
      case APP_IS_OFFLINE:
        return action.isOnline;
      default: {
        return state;
      }
    }
  };

  return combineReducers({
    isOnline,
  });
}

export default createAppReducer();
