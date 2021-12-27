import { useState, useEffect } from 'react';
import { useParams, NavLink, Route, useRouteMatch } from 'react-router-dom';
import { fetchMovies } from '../../services/moviesApi';
import Cast from '../Cast';
import Reviews from '../Reviews';
import noPoster from '../../images/no_image_poster.png';
import s from './MovieDetailsPage.module.scss';

export default function MovieDetailsPage() {
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const asyncFetch = async () => {
      const movie = await fetchMovies(`movie/${movieId}`);
      setMovie(movie);
    };
    asyncFetch();
  }, [movieId]);

  return (
    <>
      {movie && (
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
      )}

      <Route path={`${path}/cast`}>
        <Cast />
      </Route>
      <Route path={`${path}/reviews`}>
        <Reviews />
      </Route>
    </>
  );
}
