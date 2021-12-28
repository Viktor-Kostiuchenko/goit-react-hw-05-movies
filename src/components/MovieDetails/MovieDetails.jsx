import { NavLink, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import noPoster from '../../images/no_image_poster.png';
import s from './MovieDetails.module.scss';

export default function MovieDetails({ movie }) {
  const { url } = useRouteMatch();
  return (
    <div className={s.movie}>
      <div className={s.imageBox}>
        <img
          className={s.image}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : noPoster
          }
          alt={movie.title}
          loading="lazy"
        />
      </div>
      <div className={s.infoBox}>
        <div className={s.infoAbout}>
          <h3 className={s.title}>
            {movie.title ? movie.title : movie.name}
            <span className={s.year}>({movie.release_date.slice(0, 4)})</span>
          </h3>
          <p className={s.rating}>
            USER SCORE:
            <span className={s.result}>{movie.vote_average * 10}%</span>
          </p>
          <ul className={s.genres}>
            GENRES:
            {movie.genres.map(({ id, name }) => (
              <li key={id} className={s.genre}>
                {name}
              </li>
            ))}
          </ul>
          <h4 className={s.about}>ABOUT:</h4>
          <p className={s.text}>{movie.overview}</p>
        </div>
        <div className={s.infoMore}>
          <ul className={s.additional}>
            <li className={s.additionalItem}>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li className={s.additionalItem}>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
