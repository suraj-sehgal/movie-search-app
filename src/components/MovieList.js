import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="h-full  w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center gap-4 py-10" >
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
