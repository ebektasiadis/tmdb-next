import Image from 'next/image';
import Link from 'next/link';
import { useFormatter } from 'next-intl';
import { Progress } from '../ui/progress';

type MovieCardProps = {
  id: number;
  title: string;
  posterPath: string;
  releaseDate: string;
  voteAverage: number;
};

const MovieCard = ({
  id,
  title,
  posterPath,
  releaseDate,
  voteAverage,
}: MovieCardProps) => {
  const format = useFormatter();

  const formattedReleaseDate = format.dateTime(new Date(releaseDate), {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <Link
      href={`/movies/${id}`}
      className="flex w-[150px] flex-shrink-0 flex-col overflow-hidden rounded-xl shadow-2xl outline"
    >
      <div data-slot="movie-card-image">
        <Image
          width={150}
          height={225}
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${posterPath}`}
          alt={title}
        />
      </div>
      <div data-slot="movie-card-content" className="bg-background p-2">
        <Progress value={voteAverage * 10} className="mb-2" />
        <p className="min-w-0 overflow-hidden font-bold text-sm">{title}</p>
        <p className="text-muted-foreground text-sm">{formattedReleaseDate}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
