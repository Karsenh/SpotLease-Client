import {deleteItemAsync, setItemAsync} from 'expo-secure-store';

import {SESSION_ID_KEY} from '@/constants';
import {deleteUser, setSessionId, store} from '@/store';

import {logger} from './logger';

export const loginHelper = async (sessionId: string) => {
  try {
    store.dispatch(setSessionId(sessionId));
    await setItemAsync(SESSION_ID_KEY, sessionId);
  } catch (error) {
    logger.log(error);
  }
};

export const logoutHelper = async () => {
  try {
    store.dispatch(deleteUser());
    await deleteItemAsync(SESSION_ID_KEY);
  } catch (error) {
    logger.log(error);
  }
};
