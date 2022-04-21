import { useState, useEffect } from 'react';
import { fetchMovieCredits } from 'services/moviesAPI';
import { useParams } from 'react-router-dom';
import s from './Cast.module.css';

export const Cast = () => {
  const { movieID } = useParams();
  const [castList, setCastList] = useState(null);
  console.log(movieID);
  useEffect(() => {
    fetchMovieCredits(movieID).then(setCastList);
  }, [movieID]);
  console.log(castList);
  return (
    <>
      {castList && (
        <ul className={s.castList}>
          {castList.map(element => (
            <li key={element.id} className={s.castElement}>
              <h4>{element.name}</h4>
              <img
                className={s.picture}
                src={`https://image.tmdb.org/t/p/w200/${element.profile_path}`}
                alt={element.name}
              />
              <p>{element.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
