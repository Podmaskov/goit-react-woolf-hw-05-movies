import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from '../../components/Search/Search';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { getMoviesByName } from '../../api/themoviedbAPI';

const Movies = () => {
  const [params, setParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const movieName = params.get('query') ?? '';

  useEffect(() => {
    if (!movieName) return;

    const fetchMoviesByName = async () => {
      const movies = await getMoviesByName(movieName);
      setMovies(movies);
    };

    fetchMoviesByName();
  }, [movieName]);

  return (
    <>
      <Search onSubmit={setParams} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
