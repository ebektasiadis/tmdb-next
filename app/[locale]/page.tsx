import { getTranslations } from 'next-intl/server';
import SectionedMovieCardList from '@/components/SectionedMovieCardList/SectionedMovieCardList';
import { getTrendingAll } from '../api/tmdb/v3/trending/api';
import type { GetTrendingAllResponse } from '../api/tmdb/v3/trending/types';

type LocalePageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

const mapTrendingItemToMovieCard = (
  trendingItem: GetTrendingAllResponse['results'][number],
) => {
  if (trendingItem.media_type === 'person') {
    return null;
  }

  return {
    id: trendingItem.id,
    title:
      trendingItem.media_type === 'movie'
        ? trendingItem.title
        : trendingItem.name,
    posterPath: trendingItem.poster_path,
    releaseDate:
      trendingItem.media_type === 'movie'
        ? trendingItem.release_date
        : trendingItem.first_air_date,
    voteAverage: trendingItem.vote_average,
  };
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  const t = await getTranslations('Homepage');
  const [todayTrending, thisWeekTrending] = await Promise.all([
    getTrendingAll({ language: locale, time_window: 'day' }),
    getTrendingAll({ language: locale, time_window: 'week' }),
  ]);

  const todaySection = {
    title: t('today'),
    movieCardListProps: {
      movies: todayTrending.results
        .map(mapTrendingItemToMovieCard)
        .filter((movieCard) => movieCard !== null),
    },
  };

  const thisWeekSection = {
    title: t('thisWeek'),
    movieCardListProps: {
      movies: thisWeekTrending.results
        .map(mapTrendingItemToMovieCard)
        .filter((movieCard) => movieCard !== null),
    },
  };

  return <SectionedMovieCardList sections={[todaySection, thisWeekSection]} />;
}
