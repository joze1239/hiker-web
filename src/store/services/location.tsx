import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'store/baseQuery';
import { mapLocation } from 'store/mappers/mapLocation';
import { Location } from 'types/Location';

export const LOCATION_API_REDUCER_KEY = 'locationApi';

export const locationApi = createApi({
  baseQuery,
  reducerPath: LOCATION_API_REDUCER_KEY,
  endpoints: (builder) => ({
    getLocationList: builder.query<Location[], void>({
      query: () => ({
        url: 'locations',
        params: {
          populate: '*',
        },
      }),
      transformResponse: (response: any) => {
        return response.data?.map((location: any) => mapLocation(location));
      },
    }),
    getLocation: builder.query<Location, number>({
      query: (id) => ({
        url: `locations/${id}`,
      }),
      transformResponse: (response: any) => {
        return response.data?.mapLocation(location);
      },
    }),
  }),
});

export const { useGetLocationListQuery, useGetLocationQuery } = locationApi;
