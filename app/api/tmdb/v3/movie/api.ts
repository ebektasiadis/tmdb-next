import { axiosInstance } from '@/app/api/tmdb/v3/axiosInstance';
import type * as MovieTypes from '@/app/api/tmdb/v3/movie/types';

export const getNowPlaying = async (
  params: MovieTypes.GetNowPlayingParams,
): Promise<MovieTypes.GetNowPlayingResponse> => {
  const response = await axiosInstance.get(`movie/now_playing`, {
    params,
  });

  return await response.data;
};

export const getPopular = async (
  params: MovieTypes.PopularParams,
): Promise<MovieTypes.PopularResponse> => {
  const response = await axiosInstance.get(`movie/popular`, {
    params,
  });

  return await response.data;
};

export const getTopRated = async (
  params: MovieTypes.TopRatedParams,
): Promise<MovieTypes.TopRatedResponse> => {
  const response = await axiosInstance.get(`movie/top_rated`, {
    params,
  });

  return await response.data;
};

export const getUpcoming = async (
  params: MovieTypes.UpcomingParams,
): Promise<MovieTypes.UpcomingResponse> => {
  const response = await axiosInstance.get(`movie/upcoming`, {
    params,
  });

  return await response.data;
};
