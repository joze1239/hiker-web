import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { API_URL } from 'config/config';
import qs from 'qs';

export const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  paramsSerializer: (params) => {
    return qs.stringify(params, { encodeValuesOnly: true });
  },
});
