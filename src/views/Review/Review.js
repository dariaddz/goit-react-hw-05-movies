import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'services/moviesAPI';
import { useParams } from 'react-router-dom';
import s from './Review.module.css';

export const Review = () => {
  const { movieID } = useParams();
  const [reviewList, setReviewList] = useState(null);
  console.log(movieID);
  useEffect(() => {
    fetchMovieReviews(movieID).then(setReviewList);
  }, [movieID]);
  console.log(reviewList);

  return (
    <>
      {reviewList && (
        <ul className={s.list}>
          {reviewList.map(element => (
            <li key={element.id} className={s.element}>
              <h4>{element.author}</h4>
              <p className={s.content}>{element.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
