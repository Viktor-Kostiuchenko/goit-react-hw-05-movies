import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Reviews from '../../components/Reviews';
import { fetchMovies } from '../../services/moviesApi';

export default function ReviewsPage() {
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/gm)[0];
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
