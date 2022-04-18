import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { PageHeading } from 'components/PageHeading/PageHeading';
import { fetchMovieDetails } from 'services/moviesAPI';

export const MovieDetailsView = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(414906).then(setMovie);
  }, [movieId]);

  return (
    <>
      <h2>Movie {movieId}</h2>
      {movie && (
        <>
          {/* https://image.tmdb.org/t/p/w500/{movie.poster_path} */}
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.original_title}
          />
          <p>
            {movie.original_title} ({movie.release_date})
          </p>
          <p>User score: ЦІФРА</p>
          <h3> Overview</h3>
          <p>{movie.overview}</p>
          <h3> Genres</h3>
          <p>{movie.genres.map(genre => genre.name)}</p>
        </>
      )}
    </>
  );
};
