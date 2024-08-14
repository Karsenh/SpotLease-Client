import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getItem} from 'expo-secure-store';

import {TUser} from '@/api';
import {SESSION_ID_KEY} from '@/constants';

export type TAppState = {
  isOnBoardingVisible: boolean;
  sessionId?: string | null;
  isSessionSynced: boolean;
  user: TUser | null;
  fcmToken: string | null;
};

const initialState: TAppState = {
  isOnBoardingVisible: true,
  sessionId: getItem(SESSION_ID_KEY),
  isSessionSynced: false,
  user: null,
  fcmToken: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    hideOnBoarding: state => {
      state.isOnBoardingVisible = false;
    },
    setSessionId: (state, action: PayloadAction<string | null>) => {
      state.sessionId = action.payload;
    },

    setUser: (state, {payload}: PayloadAction<{user: TUser}>) => {
      state.user = payload.user;
    },

    deleteUser: state => {
      state.user = null;
      state.sessionId = null;
    },

    setSessionSynced: (state, {payload}: PayloadAction<boolean>) => {
      state.isSessionSynced = payload;
    },

    setToken: (state, {payload}: PayloadAction<{token: string | null}>) => {
      state.fcmToken = payload.token;
    },
  },
});

export const {
  actions: {
    setSessionId,
    setUser,
    hideOnBoarding,
    setSessionSynced,
    deleteUser,
    setToken,
  },
  reducer: appReducer,
} = appSlice;
