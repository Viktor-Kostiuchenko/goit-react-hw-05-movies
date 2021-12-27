import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../../services/moviesApi';
import s from './Reviews.module.scss';

export default function Cast() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const asyncFetch = async () => {
      const reviews = await fetchMovies(`movie/${movieId}/reviews`);
      setReviews(reviews);
    };

    asyncFetch();
  }, [movieId]);

  return (
    <>
      <ul className={s.reviewsList}>
        {reviews &&
          reviews.results.map(({ id, author, content, created_at }) => (
            <li key={id} className={s.reviewsItem}>
              <h3 className={s.reviewsAuthor}>{author}</h3>
              <p className={s.reviewsContent}>{content}</p>
              {/* <img className={s.image}
              src={profile_path ? 
                `https://image.tmdb.org/t/p/w500${profile_path}`
                : noPhoto} 
              alt={name} loading='lazy' 
            /> */}
            </li>
          ))}
      </ul>
      {/* {reviews && reviews.results === [] && <h3>No reviews...</h3>} */}
    </>
  );
}
