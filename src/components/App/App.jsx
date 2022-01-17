import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Section from '../Section';
import Navigation from '../Navigation';
import Loading from '../Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';

const AsyncHomePage = lazy(() =>
  import('../../views/HomePage' /* webpackChunkName: "home-page"*/),
);
const AsyncMoviesPage = lazy(() =>
  import('../../views/MoviesPage' /* webpackChunkName: "movies-page"*/),
);
const AsyncMovieDetailsPage = lazy(() =>
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
          <Route path="/" exact component={AsyncHomePage} />
          <Route path="/movies" exact component={AsyncMoviesPage} />
          <Route path="/movies/:slug" component={AsyncMovieDetailsPage} />

          <Redirect to="/" />
        </Switch>
      </Suspense>

      <ToastContainer />
    </Section>
  );
}
