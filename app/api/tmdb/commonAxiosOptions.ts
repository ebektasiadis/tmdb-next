import type { CreateAxiosDefaults } from 'axios';

export const commonAxiosOptions: CreateAxiosDefaults = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
  adapter: 'fetch',
  fetchOptions: {
    cache: 'force-cache',
  },
};
