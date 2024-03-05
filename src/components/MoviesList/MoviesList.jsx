import React from 'react';
import { MoviesListItem } from '../MoviesListItem/MoviesListItem';

import styles from './styles.module.css';

export const MoviesList = ({ title, movies }) => {
  return (
    <div className={styles['list-wrap']}>
      {title && <h1>{title}</h1>}
      <ul>
        {movies.map(({ id, title }) => (
          <MoviesListItem key={id} id={id} title={title} />
        ))}
      </ul>
    </div>
  );
};
