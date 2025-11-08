import type * as MovieTypes from '@/app/api/tmdb/v3/movie/types';
import { tmdbFetch } from '../../tmdbFetch';

export const getNowPlaying = async (
  params: MovieTypes.GetNowPlayingParams,
): Promise<MovieTypes.GetNowPlayingResponse> => {
  return tmdbFetch(`/3/movie/now_playing`, { params });
};

export const getPopular = async (
  params: MovieTypes.PopularParams,
): Promise<MovieTypes.PopularResponse> => {
  return tmdbFetch(`/3/movie/popular`, { params });
};

export const getTopRated = async (
  params: MovieTypes.TopRatedParams,
): Promise<MovieTypes.TopRatedResponse> => {
  return tmdbFetch(`/3/movie/top_rated`, { params });
};

export const getUpcoming = async (
  params: MovieTypes.UpcomingParams,
): Promise<MovieTypes.UpcomingResponse> => {
  return tmdbFetch(`/3/movie/upcoming`, { params });
};
