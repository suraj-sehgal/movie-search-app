import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };
    getMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="flex flex-col self-center bg-gray-300 md:p-3 sm:p-2 md:flex-row rounded-lg shadow-lg p-6 my-10 mx-auto max-w-4xl">
      <div className="md:w-1/2 flex-shrink-0">
        <img src={movie.Poster} alt={movie.Title} className="w-full h-auto rounded-lg shadow-md" />
      </div>
      <div className="md:w-1/2 md:ml-6 flex flex-col mt-6 md:mt-0 justify-center">
        <h2 className="text-3xl text-center font-bold mb-6">{movie.Title}</h2>
        <p className="mb-2"><strong>Year:</strong> {movie.Year}</p>
        <p className="mb-2"><strong>Genre:</strong> {movie.Genre}</p>
        <p className="mb-2"><strong>Director:</strong> {movie.Director}</p>
        <p className="mb-2"><strong>Actors:</strong> {movie.Actors}</p>
        <p className="mb-4"><strong>Plot:</strong> {movie.Plot}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
