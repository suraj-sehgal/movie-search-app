const API_KEY=process.env.REACT_APP_OMDB_API_KEY || "69369237";
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const fetchMovies = async (query, page = 1) => {
  try {
      const response = await fetch(`${BASE_URL}&s=${query}&page=${page}`);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Failed to fetch movies:', error);
      return null;
  }
};

export const fetchMovieDetails = async (id) => {
  try {
      const response = await fetch(`${BASE_URL}&i=${id}&plot=full`);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Failed to fetch movie details:', error);
      return null;
  }
};