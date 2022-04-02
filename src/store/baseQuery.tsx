import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { API_TOKEN, API_URL } from 'config/config';

export const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers) => {
    headers.set('authorization', `Bearer ${API_TOKEN}`);

    return headers;
  },
});
