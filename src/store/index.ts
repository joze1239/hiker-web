import { configureStore } from '@reduxjs/toolkit';
import { api } from 'store/services/api';
import locationReducer from 'store/slices/locationSlice';
import mapReducer from 'store/slices/mapSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    location: locationReducer,
    map: mapReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([api.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
