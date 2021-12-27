import { useEffect, useState } from 'react';
import Movies from '../../components/Movies';
import { fetchMovies } from '../../services/moviesApi';
import s from './HomePage.module.scss';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const asyncFetch = async () => {
      const { results } = await fetchMovies('/trending/all/day');
      setMovies(results);
    };

    asyncFetch();
  }, []);

  console.log(movies);
  return (
    <>
      <h2 className={s.title}>Trending today</h2>
      {movies && <Movies movies={movies} />}
    </>
  );
}
