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
      <h2>Trending today</h2>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
