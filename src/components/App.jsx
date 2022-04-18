import { Routes, Route } from 'react-router-dom';
import { TrendingMoviesView } from './views/TrendingMoviesView';

export const App = () => {


  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}

        {/* trending */}
        <Route index element={<TrendingMoviesView />} />  
        

        {/* <Route path="movies" element={<MoviesView />}/> */}
      {/* </Route> */}
    </Routes>
  );
};
