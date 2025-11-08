import merge from 'lodash/merge';

type ExtendedRequestInit = RequestInit & {
  params?: Record<string, string | number | boolean>;
};

export const tmdbFetch = async (
  url: string,
  init: ExtendedRequestInit = {},
) => {
  const { params = {}, ...rest } = init;
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, value.toString()]),
  );
  const response = await fetch(
    `https://api.themoviedb.org${url}?${queryParams.toString()}`,
    {
      ...merge(rest, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
