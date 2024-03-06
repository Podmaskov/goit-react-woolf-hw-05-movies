import React, { useEffect, useState } from 'react';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { getTrendingMovies } from '../../api/themoviedbAPI';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const trendingMovies = await getTrendingMovies();

      setTrendingMovies(trendingMovies);
    };
    fetchTrendingMovies();
  }, []);

  return <MoviesList title="Trending today" movies={trendingMovies} />;
};

export default Home;
