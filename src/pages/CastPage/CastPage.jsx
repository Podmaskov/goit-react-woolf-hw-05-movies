import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from '../../components/CastList/CastList';
import { getMovieCredits } from '../../api/themoviedbAPI';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieCredits = async () => {
      const cast = await getMovieCredits(movieId);
      setCast(cast);
    };

    fetchMovieCredits();
  }, [movieId]);

  return (
    <div>
      <CastList cast={cast} />
    </div>
  );
};

export default Cast;
