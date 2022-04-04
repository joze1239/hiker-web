import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'store/baseQuery';
import { mapLocation } from 'store/mappers/mapLocation';
import { Location } from 'types/Location';
import { LocationFilters } from 'types/LocationFilters';

export const LOCATION_API_REDUCER_KEY = 'locationApi';

export const locationApi = createApi({
  baseQuery,
  reducerPath: LOCATION_API_REDUCER_KEY,
  endpoints: (builder) => ({
    getLocationList: builder.query<Location[], LocationFilters>({
      query: (filters) => ({
        url: 'locations',
        params: {
          populate: '*',
          sort: ['height', 'name'],
          pagination: {
            limit: -1,
          },
          filters: {
            name: {
              $containsi: filters.search,
            },
            locationType: {
              id: {
                $in: filters.locationTypes,
              },
            },
          },
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
        return mapLocation(response.data);
      },
    }),
  }),
});

export const { useGetLocationListQuery, useGetLocationQuery } = locationApi;
