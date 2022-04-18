import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from 'services/moviesAPI';

export const TrendingMoviesView = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrending().then(setMovies);
  }, []);

  console.log(movies);

  return (
    <>
      {movies && (
        <ul>
          кино
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
