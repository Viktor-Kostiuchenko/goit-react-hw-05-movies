import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../../services/moviesApi';
import Cast from '../../components/Cast';

export default function CastPage() {
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/gm)[0];
  const [castList, setCastList] = useState(null);

  useEffect(() => {
    const asyncFetch = async () => {
      const cast = await fetchMovies(`movie/${movieId}/credits`);
      setCastList(cast);
    };

    asyncFetch();
  }, [movieId]);

  return <>{castList && <Cast castList={castList} />}</>;
}
