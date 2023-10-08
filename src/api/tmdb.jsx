import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const baseURL = process.env.REACT_APP_SERVER;

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${baseURL}/movie/popular`, {
      params: {
        api_key: apiKey,
      },
    });
    console.log('popular movies:', response.data.results);
    return response.data.results;
  } catch (err) {
    throw err;
  }
};

export const getNowPlayingMovies = async () => {
  try {
    const response = await axios.get(`${baseURL}/movie/now_playing`, {
      params: {
        api_key: apiKey,
      },
    });
    console.log('now playing movies:', response.data.results);
    return response.data.results;
  } catch (err) {
    throw err;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${baseURL}/search/movie`, {
      params: {
        api_key: apiKey,
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetail = async (movieId) => {
  try {
    const response = await axios.get(`${baseURL}/movie/${movieId}`, {
      params: {
        api_key: apiKey,
      },
    });
    console.log('getMovieDetail:', response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
