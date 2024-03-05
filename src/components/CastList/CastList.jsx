import React from 'react';

import styles from './styles.module.css';

export const CastList = ({ cast }) => {
  return (
    <ul className={styles.list}>
      {cast.map(({ id, name, character, profile_path }) => (
        <li className={styles['list-item']} key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : 'https://lightwidget.com/wp-content/uploads/localhost-file-not-found-480x480.avif'
            }
            alt={name}
            width="200"
            height={300}
          />
          <p>{name}</p>
          <p>{`Character: ${character}`}</p>
        </li>
      ))}
    </ul>
  );
};
