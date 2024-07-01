import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="relative border rounded-lg hover:scale-105 overflow-hidden bg-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out p-4 m-2 ">
      <div className="relative rounded-lg overflow-hidden pb-2/3 w-full">
        <img src={movie.Poster} alt={movie.Title} className=" w-full object-cover" />
      </div>
      <div className=" mt-4 flex text-center  flex-col justify-center gap-3">
        <h2 className="text-xl font-bold">{movie.Title}</h2>
        <p className="text-gray-600">{movie.Year}</p>
        <Link to={`/movie/${movie.imdbID}`} className="border rounded-lg p-3 text-center bg-blue-500 text-white mt-2 inline-block hover:bg-blue-700">View</Link>
      </div>
    </div>
  );
};

export default MovieCard;
