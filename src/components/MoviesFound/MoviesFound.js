import { Link } from 'react-router-dom';
export function MoviesFound({ movies, movieName }) {
  return (
    <>
      <h2>Search results for: {movieName}</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
