import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'store/baseQuery';
import { mapLocationType } from 'store/mappers/mapLocationType';
import { LocationType } from 'types/LocationType';

export const LOCATION_TYPE_API_REDUCER_KEY = 'locationTypeApi';

export const locationTypeApi = createApi({
  baseQuery,
  reducerPath: LOCATION_TYPE_API_REDUCER_KEY,
  endpoints: (builder) => ({
    getLocationTypeList: builder.query<LocationType[], void>({
      query: () => ({
        url: 'location-types',
        params: {
          populate: '*',
          sort: ['name'],
          pagination: {
            limit: -1,
          },
        },
      }),
      transformResponse: (response: any) => {
        return response.data?.map((locationType: any) =>
          mapLocationType(locationType)
        );
      },
    }),
    getLocationType: builder.query<LocationType, number>({
      query: (id) => ({
        url: `location-types/${id}`,
      }),
      transformResponse: (response: any) => {
        return mapLocationType(response.data);
      },
    }),
  }),
});

export const { useGetLocationTypeListQuery, useGetLocationTypeQuery } =
  locationTypeApi;
