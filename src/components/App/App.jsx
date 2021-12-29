import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Section from '../Section';
import Navigation from '../Navigation';
import Loading from '../Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() =>
  import('../../views/HomePage' /* webpackChunkName: "home-page"*/),
);
const MoviesPage = lazy(() =>
  import('../../views/MoviesPage' /* webpackChunkName: "movies-page"*/),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../../views/MovieDetailsPage' /* webpackChunkName: "movie-details-page"*/
  ),
);

export default function App() {
  return (
    <Section>
      <Navigation />

      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>

      <ToastContainer />
    </Section>
  );
}
