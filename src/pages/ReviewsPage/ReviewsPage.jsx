import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from '../../components/ReviewsList/ReviewsList';
import { getMovieReviews } from '../../api/themoviedbAPI';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieReviews = async () => {
      const reviews = await getMovieReviews(movieId);
      setReviews(reviews);
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      <ReviewsList reviews={reviews} />
    </>
  );
};

export default Reviews;
