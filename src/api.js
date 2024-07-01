const BASE_URL = `http://www.omdbapi.com/?apikey=69369237`;

export const fetchMovies = async (query, page = 1) => {
    const response = await fetch(`${BASE_URL}&s=${query}&page=${page}`);
    const data = await response.json();
    return data;
  };
  
  export const fetchMovieDetails = async (id) => {
    const response = await fetch(`${BASE_URL}&i=${id}&plot=full`);
    const data = await response.json();
    return data;
  };