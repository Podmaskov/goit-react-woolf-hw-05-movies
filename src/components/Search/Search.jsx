import React, { useState } from 'react';

import styles from './styles.module.css';

export const Search = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handelSubmit = event => {
    event.preventDefault();
    onSubmit({ query: value });
  };
  return (
    <form className={styles.form} onSubmit={handelSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search movies"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
