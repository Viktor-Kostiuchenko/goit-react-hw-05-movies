import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MoviesItem from './MoviesItem';
import s from './Movies.module.scss';

export default function Movies({ movies }) {
  const location = useLocation();
  return (
    <ul className={s.moviesList}>
      {movies &&
        movies.map(({ id, poster_path, title, name }) => (
          <li key={id} className={s.moviesitem}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
            >
              <MoviesItem src={poster_path} title={title} name={name} />
            </Link>
          </li>
        ))}
    </ul>
  );
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
