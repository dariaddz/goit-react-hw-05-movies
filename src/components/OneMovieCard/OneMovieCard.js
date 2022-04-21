import { NavLink, Outlet } from 'react-router-dom';
import s from './OneMovieCard.module.css';

export const OneMovieCard = ({ movie }) => {
  return (
    <>
      {movie && (
        <div>
          <button className={s.button} type="button">
            Go back
          </button>
          <div className={s.movieCard}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.original_title}
            />
            <div className={s.description}>
              <h2 className={s.title}>
                {movie.original_title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p className={s.paragraph}>
                User score: {movie.vote_average * 10}%
              </p>
              <h3 className={s.title}> Overview</h3>
              <p className={s.paragraph}>{movie.overview}</p>
              <h3 className={s.title}> Genres</h3>
              <p className={s.paragraph}>
                {movie.genres.map(genre => genre.name).join(', ')}
              </p>
            </div>
          </div>
          <hr />
          <h3 className={s.title}> Additional info</h3>

          <NavLink
            to="cast"
            className={({ isActive }) => (isActive ? s.active : s.inactive)}
          >
            Cast
          </NavLink>

          <NavLink
            to="review"
            className={({ isActive }) => (isActive ? s.active : s.inactive)}
          >
            Review
          </NavLink>
          <Outlet />
        </div>
      )}
    </>
  );
};
