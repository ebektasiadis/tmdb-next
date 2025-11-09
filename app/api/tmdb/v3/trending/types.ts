import type { PaginatedResponse } from '../types';

const TimeWindows = {
  Day: 'day',
  Week: 'week',
} as const;

const MediaTypes = {
  Movie: 'movie',
  Tv: 'tv',
  Person: 'person',
} as const;

const Genders = {
  Male: 0,
  Female: 1,
} as const;

type TrendingParams = {
  language?: string;
  time_window: (typeof TimeWindows)[keyof typeof TimeWindows];
};

type TrendingItem = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
};

type TrendingMovie = TrendingItem & {
  title: string;
  original_title: string;
  release_date: string;
  media_type: typeof MediaTypes.Movie;
  video: boolean;
  vote_average: number;
  vote_count: number;
  poster_path: string;
};

type TrendingPerson = TrendingItem & {
  name: string;
  original_name: string;
  media_type: typeof MediaTypes.Person;
  popularity: number;
  gender: (typeof Genders)[keyof typeof Genders];
  known_for: TrendingMovie[];
  known_for_department: string;
  profile_path: string;
};

type TrendingTv = TrendingItem & {
  poster_path: string;
  name: string;
  original_name: string;
  media_type: typeof MediaTypes.Tv;
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  original_country: string[];
};

export type GetTrendingAllParams = TrendingParams;

export type GetTrendingAllResponse = PaginatedResponse<
  TrendingMovie | TrendingPerson | TrendingTv
>;

export type GetTrendingMoviesParams = TrendingParams;

export type GetTrendingMoviesResponse = PaginatedResponse<TrendingMovie>;

export type GetTrendingPeopleParams = TrendingParams;

export type GetTrendingPeopleResponse = PaginatedResponse<TrendingPerson>;

export type GetTrendingTvParams = TrendingParams;

export type GetTrendingTvResponse = PaginatedResponse<TrendingTv>;
