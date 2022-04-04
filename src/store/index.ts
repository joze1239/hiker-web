import { configureStore } from '@reduxjs/toolkit';
import { locationApi, LOCATION_API_REDUCER_KEY } from 'store/services/location';
import locationReducer from 'store/slices/locationSlice';
import mapReducer from 'store/slices/mapSlice';
import {
  locationTypeApi,
  LOCATION_TYPE_API_REDUCER_KEY,
} from './services/locationType';

export const store = configureStore({
  reducer: {
    [LOCATION_API_REDUCER_KEY]: locationApi.reducer,
    [LOCATION_TYPE_API_REDUCER_KEY]: locationTypeApi.reducer,
    location: locationReducer,
    map: mapReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      locationApi.middleware,
      locationTypeApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
