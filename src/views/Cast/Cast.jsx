import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../../services/moviesApi';
import noPhoto from '../../images/no-photo.png';
import s from './Cast.module.scss';

export default function Cast() {
  const { movieId } = useParams();
  const [castList, setCastList] = useState(null);

  useEffect(() => {
    const asyncFetch = async () => {
      const cast = await fetchMovies(`movie/${movieId}/credits`);
      setCastList(cast);
    };

    asyncFetch();
  }, [movieId]);

  console.log(castList);
  return (
    <>
      <ul className={s.castList}>
        {castList &&
          castList.cast.map(({ id, name, character, profile_path }) => (
            <li key={id} className={s.castItem}>
              <h3>{name}</h3>
              <h4 className={s.character}>({character})</h4>
              <img
                className={s.image}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : noPhoto
                }
                alt={name}
                loading="lazy"
              />
            </li>
          ))}
      </ul>
    </>
  );
}
