import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Route, useRouteMatch } from 'react-router-dom';
import { fetchMovies } from '../../services/moviesApi';
import MovieDetails from '../../components/MovieDetails';

const CastPage = lazy(() =>
  import('../CastPage' /* webpackChunkName: "cast"*/),
);
const ReviewsPage = lazy(() =>
  import('../ReviewsPage' /* webpackChunkName: "reviews"*/),
);

export default function MovieDetailsPage() {
  const { path } = useRouteMatch();
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
      {movie && <MovieDetails movie={movie} />}

      <Suspense fallback={<h2>ЗАГРУЖАЕМ...</h2>}>
        <Route path={`${path}/cast`}>
          <CastPage />
        </Route>
        <Route path={`${path}/reviews`}>
          <ReviewsPage />
        </Route>
      </Suspense>
    </>
  );
}
