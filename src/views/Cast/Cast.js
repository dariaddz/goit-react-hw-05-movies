import { useState, useEffect } from 'react';
import { fetchMovieCredits } from 'services/moviesAPI';
import { useParams } from 'react-router-dom';
import s from './Cast.module.css';

export const Cast = () => {
  const { movieID } = useParams();
  const [castList, setCastList] = useState(null);

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
                src={
                  element.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${element.profile_path}`
                    : '../images/no-poster_2x.jpg'
                }
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

//  src={
//                   movie.poster_path
//                     ? `https://image.tmdb.org/t/p/w500` + movie.poster_path
//                     : 'https://raw.githubusercontent.com/SergiusNahnoinyi/goit-react-hw-05-movies/main/public/logo512.png'
//                 }
