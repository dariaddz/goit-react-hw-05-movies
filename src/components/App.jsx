import { Routes, Route } from 'react-router-dom';
import { TrendingMoviesView } from '../views/TrendingMoviesView';
import { MoviesView } from 'views/MoviesView';
import { Navigation } from './Navigation/Navigation';


export const App = () => {


  return (
    <Routes>
      <Route path="/" element={<Navigation />}>

        <Route index element={<TrendingMoviesView />} />  
        

        <Route path="movies" element={<MoviesView />}/>
      </Route>
    </Routes>
  );
};
