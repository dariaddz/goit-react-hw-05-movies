import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { Cast } from 'views/Cast';
// import { PageHeading } from 'components/PageHeading/PageHeading';
import { fetchMovieDetails } from 'services/moviesAPI';
import { Review } from 'views/Review';

export const MovieDetailsView = () => {
  const { movieID } = useParams();

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetchMovieDetails(movieID).then(setMovie);
  }, [movieID]);

  return (
    <>
      <h2>Movie {movieID}</h2>
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.original_title}
          />
          <h2>
            {movie.original_title} ({movie.release_date})
          </h2>
          <p>User score: ЦІФРА</p>
          <h3> Overview</h3>
          <p>{movie.overview}</p>
          <h3> Genres</h3>
          <p>{movie.genres.map(genre => genre.name)}</p>
          <hr />
          <h3> Additional info</h3>

          <Link to="cast">
            Cast
            <Cast />
          </Link>

          <Link to="review">
            Review
            <Review />
          </Link>

          <Outlet />
        </>
      )}
    </>
  );
};
