import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Reviews from '../../components/Reviews';
import { fetchMovies } from '../../services/moviesApi';

export default function ReviewsPage() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const asyncFetch = async () => {
      const reviews = await fetchMovies(`movie/${movieId}/reviews`);
      setReviews(reviews);
    };

    asyncFetch();
  }, [movieId]);

  return <>{reviews && <Reviews reviews={reviews} />}</>;
}
