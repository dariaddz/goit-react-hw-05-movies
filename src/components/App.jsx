import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { NotFoundView } from 'views/NotFoundView';


const MoviesPage = lazy(() => import('../views/MoviesPage/MoviesPage'))
const MovieDetailsView = lazy(() => import('../views/MovieDetailView/MovieDetailView'))
const TrendingMoviesView = lazy(() => import('../views/TrendingMoviesView/TrendingMoviesView'))
const Cast = lazy(() => import('../views/Cast/Cast'))
const Review = lazy(() => import('../views/Review/Review'))

export const App = () => {


  return (
    <Suspense fallback="loading">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TrendingMoviesView />} />
        <Route path="movies" element={<MoviesPage />}></Route>
        <Route path="movies/:movieID" element={<MovieDetailsView />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review/>} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Route>
         
      </Routes>
      </Suspense>
  );
};
