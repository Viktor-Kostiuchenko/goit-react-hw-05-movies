import { useEffect, useState } from 'react';
import Movies from '../../components/Movies';
import { fetchMovies } from '../../services/moviesApi';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const asyncFetch = async () => {
      const { results } = await fetchMovies('/trending/all/day');
      setMovies(results);
    };

    asyncFetch();
  }, []);

  return <>{movies && <Movies movies={movies} />}</>;
}
