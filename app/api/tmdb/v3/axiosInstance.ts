import axios, { type CreateAxiosDefaults } from 'axios';
import merge from 'lodash/merge';
import { commonAxiosOptions } from '@/app/api/tmdb/commonAxiosOptions';

const axiosOptions: CreateAxiosDefaults = {
  baseURL: `${process.env.TMDB_API_BASE_URL}/3`,
};

export const axiosInstance = axios.create(
  merge(commonAxiosOptions, axiosOptions),
);
