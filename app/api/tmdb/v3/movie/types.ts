import type { PaginatedResponse } from '@/app/api/tmdb/v3/types';

type MovieOverview = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type MovieListParams = {
  language?: string;
  page?: number;
  region?: string;
};

export type GetNowPlayingParams = MovieListParams;

export type GetNowPlayingResponse = PaginatedResponse<MovieOverview> & {
  dates: {
    maximum: string;
    minimum: string;
  };
};

export type PopularParams = MovieListParams;

export type PopularResponse = PaginatedResponse<MovieOverview>;

export type TopRatedParams = MovieListParams;

export type TopRatedResponse = PaginatedResponse<MovieOverview>;

export type UpcomingParams = MovieListParams;

export type UpcomingResponse = PaginatedResponse<MovieOverview> & {
  dates: {
    maximum: string;
    minimum: string;
  };
};
