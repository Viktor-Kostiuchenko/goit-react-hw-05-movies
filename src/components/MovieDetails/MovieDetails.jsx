import {
  NavLink,
  useRouteMatch,
  useLocation,
  useParams,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import noPoster from '../../images/no_image_poster.png';
import s from './MovieDetails.module.scss';

export default function MovieDetails({ movie }) {
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/gm)[0];
  const { url } = useRouteMatch();
  const location = useLocation();

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
            user score:
            <span className={s.result}>{movie.vote_average * 10}%</span>
          </p>
          <ul className={s.genres}>
            genres:
            {movie.genres.map(({ id, name }) => (
              <li key={id} className={s.genre}>
                {name}
              </li>
            ))}
          </ul>
          <h4 className={s.about}>about:</h4>
          <p className={s.text}>{movie.overview}</p>
        </div>
        <div className={s.infoMore}>
          <ul className={s.additional}>
            <li className={s.additionalItem}>
              <NavLink
                className={s.link}
                activeClassName={s.activeLink}
                to={{
                  pathname: `${url}/cast`,
                  state: { ...location.state, id: movieId },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li className={s.additionalItem}>
              <NavLink
                className={s.link}
                activeClassName={s.activeLink}
                to={{
                  pathname: `${url}/reviews`,
                  state: { ...location.state, id: movieId },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};
