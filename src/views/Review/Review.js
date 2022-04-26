import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'services/moviesAPI';
import { useParams } from 'react-router-dom';
import s from './Review.module.css';

export default function Review() {
  const { movieID } = useParams();
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieID).then(setReviewList);
  }, [movieID]);

  return (
    <>
      {reviewList.length !== 0 ? (
        <ul className={s.list}>
          {reviewList.map(element => (
            <li key={element.id} className={s.element}>
              <h4>{element.author}</h4>
              <p className={s.content}>{element.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, there are no reviews yet</p>
      )}
    </>
  );
}
