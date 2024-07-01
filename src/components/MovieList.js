import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  console.log(movies)
  return (
    <div className="h-full  w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center gap-4 py-10" >
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
      {movies.length===0&&<h1 className='text-white text-center'>No Result Found</h1>}
    </div>
  );
};

export default MovieList;
