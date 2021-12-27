import { useState, useEffect } from 'react';
import SearchForm from '../../components/SearchForm';
import Movies from '../../components/Movies';
import { fetchMovies } from '../../services/moviesApi';

export default function MoviesPage() {
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    const asyncFetch = async () => {
      const movies = await fetchMovies(`search/movie?query=${query}`);
      setMovies(movies);
    };

    asyncFetch();
  }, [query]);

  const onFormSubmit = query => {
    setQuery(query);
  };

  return (
    <>
      <SearchForm onSubmit={onFormSubmit} />
      {movies && <Movies movies={movies.results} />}
    </>
  );
}
