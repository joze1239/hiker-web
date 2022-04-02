import { configureStore } from '@reduxjs/toolkit';
import { locationApi, LOCATION_API_REDUCER_KEY } from 'store/services/location';

export const store = configureStore({
  reducer: {
    [LOCATION_API_REDUCER_KEY]: locationApi.reducer,
    //  auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([locationApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
