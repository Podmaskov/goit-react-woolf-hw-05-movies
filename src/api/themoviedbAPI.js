import axios from 'axios';

const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGU5ODM3MDQ5MGYyOGE2NTJjMGFiODZhMzhmOTY1NiIsInN1YiI6IjVkNTZiOTM5ZTgxMzFkNGFhMTg5Y2FlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ehg9Yw7RHCs8F49qJgx7lxwg_wDI9ZkAzxzMQgHojdE';
const themoviesdbAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: { Authorization: `Bearer ${API_TOKEN}` },
});

export const getTrendingMovies = async () => {
  try {
    const { data } = await themoviesdbAPI.get(`/trending/movie/day`);
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies', error);
  }
};

export const getMoviesByName = async name => {
  try {
    const { data } = await themoviesdbAPI.get(`/search/movie`, {
      params: { query: name },
    });
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies', error);
  }
};

export const getMovieDetails = async id => {
  try {
    const { data } = await themoviesdbAPI.get(`/movie/${id}`);
    return data;
  } catch (error) {
    console.error('Error fetching trending movies', error);
  }
};

export const getMovieCredits = async id => {
  try {
    const { data } = await themoviesdbAPI.get(`movie/${id}/credits`);
    return data.cast;
  } catch (error) {
    console.error('Error fetching trending movies', error);
  }
};

export const getMovieReviews = async id => {
  try {
    const { data } = await themoviesdbAPI.get(`movie/${id}/reviews`);
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies', error);
  }
};
