// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCredits } from 'services/moviesAPI';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  // const [cast, setCast] = useState(null);
  // useEffect(() => {
  //   fetchMovieCredits(movieID).then(setCast);
  // }, [movieID]);

  return <div>список актеров</div>;
};
