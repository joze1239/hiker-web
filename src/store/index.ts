import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { api } from 'store/services/api';
import locationReducer from 'store/slices/locationSlice';
import mapReducer from 'store/slices/mapSlice';
import settingsReducer from 'store/slices/settingsSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['settings'],
};

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  location: locationReducer,
  map: mapReducer,
  settings: settingsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([api.middleware]),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
