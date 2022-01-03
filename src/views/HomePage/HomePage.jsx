import { useEffect, useState } from 'react';
import Movies from '../../components/Movies';
import Pagination from '../../components/Pagination';
import { fetchMovies } from '../../services/moviesApi';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const asyncFetch = async () => {
      const movies = await fetchMovies(`/trending/movie/week?page=${page}`);
      setMovies(movies);
    };

    asyncFetch();
  }, [page]);

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
