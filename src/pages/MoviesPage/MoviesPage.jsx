import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from '../../components/Search/Search';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { getMoviesByName } from '../../api/themoviedbAPI';

const Movies = () => {
  const [params, setParams] = useSearchParams();
  const [movieName, setMovieName] = useState(params.get('query') ?? '');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!movieName) return;

    const fetchMoviesByName = async () => {
      const movies = await getMoviesByName(movieName);
      setMovies(movies);
      setParams({ query: movieName });
    };

    fetchMoviesByName();
  }, [movieName, setParams]);

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Search onSubmit={setMovieName} />
      <MoviesList movies={movies} />
    </Suspense>
  );
};

export default Movies;
