import { Link } from 'react-router-dom';
import MoviesItem from './MoviesItem';
import s from './Movies.module.scss';

export default function Movies({ movies }) {
  return (
    <ul className={s.moviesList}>
      {movies &&
        movies.map(({ id, poster_path, title, name }) => (
          <li key={id} className={s.moviesitem}>
            <Link to={`/movies/${id}`}>
              <MoviesItem src={poster_path} title={title} name={name} />
            </Link>
          </li>
        ))}
    </ul>
  );
}
