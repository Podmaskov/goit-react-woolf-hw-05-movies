import React from 'react';

import styles from './styles.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

export const MovieDetails = ({ movieDetails }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    original_title,
    release_date,
    poster_path,
    overview,
    genres,
    vote_average,
  } = movieDetails;

  const goBack = () => {
    navigate(location?.state ?? '/');
  };

  const voteAverageInPercent = `User score: ${Math.round(vote_average * 10)}%`;

  return (
    <div>
      <button className={styles.btn} type="button" onClick={goBack}>
        ← Go back
      </button>
      <div className={styles.wrap}>
        <img
          className={styles.image}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />
        <div className={styles.info}>
          {original_title && (
            <h1>{`${original_title} (${new Date(
              release_date
            ).getFullYear()})`}</h1>
          )}
          {vote_average && <p>{voteAverageInPercent}</p>}
          {overview && (
            <>
              <h3>Overview</h3>
              <p>{overview}</p>
            </>
          )}
          {genres && genres.length && (
            <>
              <h3>Genres</h3>
              <ul className={styles.genres}>
                {genres &&
                  genres.map(({ id, name }) => <li key={id}>{name}</li>)}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
