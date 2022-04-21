import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from 'services/moviesAPI';

export const TrendingMoviesView = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrending().then(setMovies);
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <img
        src="https://raw.githubusercontent.com/dariaddz/goit-react-hw-05-movies/src/images/no-poster_2x.jpg"
        alt="заглушка"
      />
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
