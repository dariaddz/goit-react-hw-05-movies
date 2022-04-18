import { Routes, Route } from 'react-router-dom';
import { TrendingMoviesView } from '../views/TrendingMoviesView';
import { MovieDetailsView } from 'views/MovieDetailView/MovieDetailView';
// import { MoviesView } from 'views/MoviesView';
// import { Navigation } from './Navigation/Navigation';


export const App = () => {


  return (
    <Routes>
    

    <Route path="/" index element={<TrendingMoviesView />} />  
    <Route path="/movie/:movieID" index element={<MovieDetailsView/>} />
    </Routes>
  );
};
