import * as api from '../api/connection';

export const checkUserConnection = () => dispatch =>
  api.onConnectionChanged(isConnected => {
    dispatch({ type: 'CONNECTION_ USER_STATUS_CHANGED' });
  });
