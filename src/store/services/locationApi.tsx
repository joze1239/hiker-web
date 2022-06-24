import { api } from 'store/services/api';
import { Location } from 'types/Location';
import { LocationFilters } from 'types/LocationFilters';

export const locationApi = api.injectEndpoints({
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
        return response.data;
      },
    }),
    getLocation: builder.query<Location, number>({
      query: (id) => ({
        url: `locations/${id}`,
      }),
      transformResponse: (response: any) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetLocationListQuery, useGetLocationQuery } = locationApi;
