import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { fetchMovies } from '../../services/moviesApi';
import MovieDetails from '../../components/MovieDetails';
import ButtonBack from '../../components/ButtonBack';
import Loading from '../../components/Loader/Loader';

const CastPage = lazy(() =>
  import('../CastPage' /* webpackChunkName: "cast"*/),
);
const ReviewsPage = lazy(() =>
  import('../ReviewsPage' /* webpackChunkName: "reviews"*/),
);

export default function MovieDetailsPage() {
  const location = useLocation();
  const history = useHistory();
  const { path } = useRouteMatch();
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/gm)[0];
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const asyncFetch = async () => {
      const movie = await fetchMovies(`movie/${movieId}`);
      setMovie(movie);
    };
    asyncFetch();
  }, [movieId]);

  const onBackClick = () => {
    if (location && location.state && location.state.from) {
      const { pathname, search } = location.state.from;
      history.push(`${pathname}${search}`);

      return;
    }
    history.push('/');
    // history.push(location?.state?.from ?? '/movies')
  };

  return (
    <>
      <ButtonBack onBackClick={onBackClick} />

      {movie && <MovieDetails movie={movie} />}

      <Suspense fallback={<Loading />}>
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
