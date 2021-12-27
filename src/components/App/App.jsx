import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Section from '../Section';
import Navigation from '../Navigation';
import HomePage from '../../views/HomePage';
import MoviesPage from '../../views/MoviesPage';
import MovieDetailsPage from '../../views/MovieDetailsPage';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <Section>
      <Navigation />

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

      <ToastContainer />
    </Section>
  );
}
