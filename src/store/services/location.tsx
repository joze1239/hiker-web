import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'store/baseQuery';
import { Location } from 'types/Location';
import { PaginatedList } from 'types/PaginatedList';

export const LOCATION_API_REDUCER_KEY = 'locationApi';

export const locationApi = createApi({
  baseQuery,
  reducerPath: LOCATION_API_REDUCER_KEY,
  endpoints: (builder) => ({
    getLocationList: builder.query<PaginatedList<Location>, void>({
      query: () => ({
        url: 'locations',
        params: {
          populate: '*',
        },
      }),
    }),
    getLocation: builder.query<Location, number>({
      query: (id) => ({
        url: `locations/${id}`,
      }),
    }),
  }),
});

export const { useGetLocationListQuery, useLazyGetLocationQuery } = locationApi;
