import { getNowPlaying, getTopRated } from '@/app/api/tmdb/v3/movie/api';

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
    <div>
      <h1 className="text-2xl">Now Playing Movies</h1>
      <ul>
        {nowPlaying.results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      <h1 className="mt-4 text-2xl">Top Rated Movies</h1>
      <ul>
        {topRated.results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
