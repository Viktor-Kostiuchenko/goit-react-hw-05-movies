import { useState, useEffect } from 'react';
import {
  useLocation,
  useHistory,
} from 'react-router-dom/cjs/react-router-dom.min';
import SearchForm from '../../components/SearchForm';
import Movies from '../../components/Movies';
import Pagination from '../../components/Pagination';
import { fetchMovies } from '../../services/moviesApi';

export default function MoviesPage() {
  const location = useLocation();
  const history = useHistory();
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState(null);

  const searchQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    setQuery(searchQuery);
    const asyncFetch = async () => {
      const movies = await fetchMovies(
        `search/movie?query=${searchQuery}&page=${page}`,
      );
      setMovies(movies);
    };

    asyncFetch();
  }, [page, searchQuery]);

  const onFormSubmit = query => {
    setQuery(query);
    setPage(1);
    history.push({ ...location, search: `query=${query}` });
  };

  const onNextBtnClick = () => {
    setPage(state => state + 1);
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  const onPrevBtnClick = () => {
    setPage(state => state - 1);
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  return (
    <>
      <SearchForm onSubmit={onFormSubmit} />
      {movies && (
        <>
          <Movies movies={movies.results} />
          <Pagination
            next={onNextBtnClick}
            prev={onPrevBtnClick}
            page={page}
            totalPages={movies.total_pages}
          />
        </>
      )}
    </>
  );
}
