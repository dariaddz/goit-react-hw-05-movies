import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/moviesAPI';

import { OneMovieCard } from 'components/OneMovieCard';

export const MovieDetailsView = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieID).then(setMovie);
  }, [movieID]);

  return <OneMovieCard movie={movie} />;
};
