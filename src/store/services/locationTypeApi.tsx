import { api } from 'store/services/api';
import { LocationType } from 'types/LocationType';

export const LOCATION_TYPE_API_REDUCER_KEY = 'locationTypeApi';

export const locationTypeApi = api.injectEndpoints({
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
        return response.data;
      },
    }),
    getLocationType: builder.query<LocationType, number>({
      query: (id) => ({
        url: `location-types/${id}`,
      }),
      transformResponse: (response: any) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetLocationTypeListQuery, useGetLocationTypeQuery } =
  locationTypeApi;
