import React from 'react';

import styles from './styles.module.css';

export const ReviewsList = ({ reviews }) => {
  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>{`Author: ${author}`}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {!reviews.length && (
        <p className={styles.fallback}>
          We don't have any reviews for this movie.
        </p>
      )}
    </>
  );
};
