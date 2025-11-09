import type React from 'react';
import MovieCard from '../MovieCard/MovieCard';

type MovieCardListProps = {
  movies: React.ComponentProps<typeof MovieCard>[];
};

const MovieCardList = ({ movies }: MovieCardListProps) => {
  return (
    <div className="flex flex-nowrap gap-2 overflow-x-auto p-2">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieCardList;
