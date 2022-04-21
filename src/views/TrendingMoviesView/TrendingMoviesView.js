import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from 'services/moviesAPI';
import s from './TrendingMoviesView.module.css';
import zeroPicture from '../../images/no-poster-big-2x.jpg';

export const TrendingMoviesView = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrending().then(setMovies);
  }, []);

  return (
    <>
      <h2>Trending today</h2>

      {movies && (
        <ul className={s.list}>
          {movies.map(movie => (
            <li className={s.element} key={movie.id}>
              <Link className={s.link} to={`movies/${movie.id}`}>
                <div className="element">
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
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
