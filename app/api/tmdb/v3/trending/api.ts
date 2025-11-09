import type * as TrendingTypes from '@/app/api/tmdb/v3/trending/types';
import { tmdbFetch } from '../../tmdbFetch';

export const getTrendingAll = async ({
  time_window,
  ...params
}: TrendingTypes.GetTrendingAllParams): Promise<TrendingTypes.GetTrendingAllResponse> => {
  return tmdbFetch(`/3/trending/all/${time_window}`, { params });
};

export const getTrendingMovies = async ({
  time_window,
  ...params
}: TrendingTypes.GetTrendingMoviesParams): Promise<TrendingTypes.GetTrendingMoviesResponse> => {
  return tmdbFetch(`/3/trending/movies/${time_window}`, { params });
};

export const getTrendingPeople = async ({
  time_window,
  ...params
}: TrendingTypes.GetTrendingPeopleParams): Promise<TrendingTypes.GetTrendingPeopleResponse> => {
  return tmdbFetch(`/3/trending/people/${time_window}`, { params });
};

export const getTrendingTv = async ({
  time_window,
  ...params
}: TrendingTypes.GetTrendingTvParams): Promise<TrendingTypes.GetTrendingTvResponse> => {
  return tmdbFetch(`/3/trending/tv/${time_window}`, { params });
};
