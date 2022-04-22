import { Link } from 'react-router-dom';
import s from './MoviesFound.module.css';
import zeroPicture from '../../images/no-poster-big-2x.jpg';

export function MoviesFound({ movies, movieName }) {
  console.log(movies.length, 'movies length found');
  return (
    <>
      {movies.length === 0 ? (
        <h2 className={s.header}>Sorry, no results for: {movieName}</h2>
      ) : (
        <>
          <h2 className={s.header}>Search results for: {movieName}</h2>
          <ul className={s.list}>
            {movies.map(movie => (
              <li key={movie.id} className={s.element}>
                <Link to={`${movie.id}`} className={s.link}>
                  <img
                    className={s.poster}
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                        : `${zeroPicture}`
                    }
                    alt={movie.title}
                  />
                  <p className={s.title}>{movie.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
