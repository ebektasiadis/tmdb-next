import { render, screen } from '@testing-library/react';
import SectionedMovieCardList from './SectionedMovieCardList';

const sectionedMovieCardListProps = {
  defaultSection: 'Now Playing',
  sections: [
    {
      title: 'Now Playing',
      movieCardListProps: {
        movies: [
          {
            id: 1,
            title: 'Movie 1',
            posterPath: '/poster.jpg',
            releaseDate: '2021-01-01',
            voteAverage: 7.5,
          },
        ],
      },
    },
    {
      title: 'Top Rated',
      movieCardListProps: {
        movies: [
          {
            id: 2,
            title: 'Movie 2',
            posterPath: '/poster.jpg',
            releaseDate: '2021-01-01',
            voteAverage: 7.5,
          },
        ],
      },
    },
  ],
};

describe('SectionedMovieCardList', () => {
  it('should show all the available sections', () => {
    render(<SectionedMovieCardList {...sectionedMovieCardListProps} />);
    expect(screen.getByText('Now Playing')).toBeVisible();
    expect(screen.getByText('Top Rated')).toBeVisible();
  });

  it('should select the first section by default if no default section is provided', () => {
    render(<SectionedMovieCardList {...sectionedMovieCardListProps} />);
    expect(screen.getByText('Now Playing')).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(screen.getByText('Top Rated')).toHaveAttribute(
      'aria-selected',
      'false',
    );
  });

  it('should select the section provided as default section', () => {
    render(
      <SectionedMovieCardList
        {...sectionedMovieCardListProps}
        defaultSection="Top Rated"
      />,
    );
    expect(screen.getByText('Now Playing')).toHaveAttribute(
      'aria-selected',
      'false',
    );
    expect(screen.getByText('Top Rated')).toHaveAttribute(
      'aria-selected',
      'true',
    );
  });

  it('should show the movie card list for the selected section', () => {
    render(<SectionedMovieCardList {...sectionedMovieCardListProps} />);
    expect(screen.getByText('Movie 1')).toBeVisible();
    expect(screen.queryByText('Movie 2')).not.toBeInTheDocument();
  });
});
