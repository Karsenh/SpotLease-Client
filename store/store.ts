import AsyncStorage from '@react-native-async-storage/async-storage';
import {Action, configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  createTransform,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig,
} from 'redux-persist';

import {apiSlice} from '../api/api.slice';
import {TAppState, appReducer} from './slices/app/app.slice';
import {filtersReducer} from './slices/filters/filters.slice';

const transforms = [
  createTransform(
    state => JSON.stringify(state),
    state =>
      JSON.parse(state, (key, value) =>
        typeof value === 'string' &&
        value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
          ? new Date(value)
          : value,
      ),
  ),
];

const persistConfig: PersistConfig<TAppState> = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['isOnBoardingVisible'],
  blacklist: ['isSessionSynced'],
  transforms,
};

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    app: persistReducer<TAppState, Action>(persistConfig, appReducer),
    filters: filtersReducer,
  },
  middleware: gDM =>
    gDM({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);
