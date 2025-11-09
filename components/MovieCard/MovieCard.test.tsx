import { render, screen } from '@testing-library/react';
import MovieCard from './MovieCard';

const movieCardProps = {
  id: 1,
  title: 'Movie Title',
  posterPath: '/poster.jpg',
  releaseDate: '2021-01-01',
  voteAverage: 7.5,
};

describe('MovieCard', () => {
  it('should show the movie title', () => {
    render(<MovieCard {...movieCardProps} />);
    expect(screen.getByText(movieCardProps.title)).toBeVisible();
  });

  it('should show the movie release date', () => {
    render(<MovieCard {...movieCardProps} />);
    expect(screen.getByText('Jan 01, 2021')).toBeVisible();
  });

  it('should show the movie vote average', () => {
    render(<MovieCard {...movieCardProps} />);
    const indicator = screen.getByTestId('progress-indicator');
    expect(indicator).toHaveAttribute('data-value', '75');
  });

  it('should show the movie poster', () => {
    render(<MovieCard {...movieCardProps} />);
    const poster = screen.getByRole('img');
    expect(poster).toHaveAttribute(
      'src',
      'https://image.tmdb.org/t/p/w220_and_h330_face/poster.jpg',
    );
    expect(poster).toHaveAttribute('alt', 'Movie Title');
  });

  it('should link to the movie details page', () => {
    render(<MovieCard {...movieCardProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/movies/1');
  });
});
