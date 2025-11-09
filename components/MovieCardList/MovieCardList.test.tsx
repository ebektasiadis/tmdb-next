import { render, screen } from '@testing-library/react';
import MovieCardList from './MovieCardList';

const movieCardListProps = {
  movies: [
    {
      id: 1,
      title: 'Movie 1',
      posterPath: '/poster.jpg',
      releaseDate: '2021-01-01',
      voteAverage: 7.5,
    },
    {
      id: 2,
      title: 'Movie 2',
      posterPath: '/poster.jpg',
      releaseDate: '2021-01-01',
      voteAverage: 7.5,
    },
  ],
};

describe('MovieCardList', () => {
  it('should show the movie cards in correct order', () => {
    render(<MovieCardList {...movieCardListProps} />);
    expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', '/movies/1');
    expect(screen.getAllByRole('link')[1]).toHaveAttribute('href', '/movies/2');
  });
});
