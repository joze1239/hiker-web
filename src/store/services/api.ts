import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'config/config';
import qs from 'qs';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    paramsSerializer: (params) => {
      return qs.stringify(params, { encodeValuesOnly: true });
    },
  }),
  endpoints: () => ({}),
});
