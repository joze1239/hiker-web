import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { API_TOKEN, API_URL } from 'config/config';
import qs from 'qs';

export const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers) => {
    headers.set('authorization', `Bearer ${API_TOKEN}`);

    return headers;
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, { encodeValuesOnly: true });
  },
});
