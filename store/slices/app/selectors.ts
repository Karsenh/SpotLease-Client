import {Selector} from '@reduxjs/toolkit';

import {RootState} from '@/store/types';

export const selectSessionId: Selector<
  RootState,
  string | null | undefined
> = store => store.app.sessionId;

export const selectIsOnBoardingVisible: Selector<
  RootState,
  RootState['app']['isOnBoardingVisible']
> = store => store.app.isOnBoardingVisible;

export const selectUser: Selector<
  RootState,
  RootState['app']['user']
> = store => store.app.user;

export const selectIsSessionSynced: Selector<
  RootState,
  RootState['app']['isSessionSynced']
> = store => store.app.isSessionSynced;

export const selectFCMToken: Selector<
  RootState,
  RootState['app']['fcmToken']
> = store => store.app.fcmToken;
