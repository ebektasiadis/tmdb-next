import { getNowPlaying, getTopRated } from '@/app/api/tmdb/v3/movie/api';
import SectionedMovieCardList from '@/components/SectionedMovieCardList/SectionedMovieCardList';

type LocalePageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  const [nowPlaying, topRated] = await Promise.all([
    getNowPlaying({ language: locale, page: 1 }),
    getTopRated({ language: locale, page: 1 }),
  ]);

  return (
    <SectionedMovieCardList
      sections={[
        {
          title: 'Now Playing',
          movieCardListProps: {
            movies: nowPlaying.results.map((movie) => ({
              id: movie.id,
              title: movie.title,
              posterPath: movie.poster_path,
              releaseDate: movie.release_date,
              voteAverage: movie.vote_average,
            })),
          },
        },
        {
          title: 'Top Rated',
          movieCardListProps: {
            movies: topRated.results.map((movie) => ({
              id: movie.id,
              title: movie.title,
              posterPath: movie.poster_path,
              releaseDate: movie.release_date,
              voteAverage: movie.vote_average,
            })),
          },
        },
      ]}
    />
  );
}
