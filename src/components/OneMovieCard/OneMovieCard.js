import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import s from './OneMovieCard.module.css';
import zeroPicture from '../../images/no-poster-big-2x.jpg';
import PropTypes from 'prop-types';

export const OneMovieCard = ({ movie }) => {
  const location = useLocation();

  return (
    <>
      {movie && (
        <div>
          <Link to={!location.state ? '/' : location.state.from}>
            <button className={s.button} type="button">
              Go back
            </button>
          </Link>
          <div className={s.movieCard}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                  : `${zeroPicture}`
              }
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
          <div className={s.additionalNav}>
            <h3 className={s.title}> Additional info</h3>

            <NavLink
              to="cast"
              state={{ from: location }}
              className={({ isActive }) => (isActive ? s.active : s.inactive)}
            >
              Cast
            </NavLink>

            <NavLink
              to="review"
              state={{ from: location }}
              className={({ isActive }) => (isActive ? s.active : s.inactive)}
            >
              Review
            </NavLink>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

OneMovieCard.propTypes = {
  movie: PropTypes.object,
};
