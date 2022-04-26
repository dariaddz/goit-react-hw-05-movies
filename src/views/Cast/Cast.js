import { useState, useEffect } from 'react';
import { fetchMovieCredits } from 'services/moviesAPI';
import { useParams } from 'react-router-dom';
import s from './Cast.module.css';
import zeroPicture from '../../images/no-poster-big-2x.jpg';

export default function Cast() {
  const { movieID } = useParams();
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieID).then(setCastList);
  }, [movieID]);

  return (
    <>
      {castList.length ? (
        <ul className={s.castList}>
          {castList.map(element => (
            <li key={element.id} className={s.castElement}>
              <h4>{element.name}</h4>
              <img
                className={s.picture}
                src={
                  element.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${element.profile_path}`
                    : `${zeroPicture}`
                }
                alt={element.name}
              />
              <p>{element.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information avaliable</p>
      )}
    </>
  );
}
