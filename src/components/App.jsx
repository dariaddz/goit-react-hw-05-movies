import { Routes, Route } from 'react-router-dom';
import { TrendingMoviesView } from '../views/TrendingMoviesView/TrendingMoviesView';
import { MovieDetailsView } from 'views/MovieDetailView/MovieDetailView';
import { MoviesPage} from 'views/MoviesPage/'
import { Layout } from './Layout';
import { Cast } from 'views/Cast';
import { Review } from 'views/Review';

// import { MoviesView } from 'views/MoviesView';



export const App = () => {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TrendingMoviesView />} />
        <Route path="movies" element={<MoviesPage />}></Route>
        <Route path="movies/:movieID" element={<MovieDetailsView />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review/>} />
        </Route>
      
   



      </Route>
       
      
    </Routes>
  );
};
