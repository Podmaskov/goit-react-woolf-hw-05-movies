import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';

import { MovieDetails } from '../../components/MovieDetails/MovieDetails';
import { getMovieDetails } from '../../api/themoviedbAPI';

import styles from './styles.module.css';

const MovieDetailsPage = () => {
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieDetails = async () => {
      const movieDetails = await getMovieDetails(movieId);
      setMovieDetails(movieDetails);
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {movieDetails && <MovieDetails movieDetails={movieDetails} />}
      <hr />
      <p className={styles['addition-title']}>Addition information</p>
      <ul>
        <li>
          <p>
            <Link to={`cast`} state={location.state}>
              Cast
            </Link>
          </p>
        </li>
        <li>
          <p>
            <Link to={`reviews`} state={location.state}>
              Reviews
            </Link>
          </p>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
