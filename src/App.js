import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import { fetchMovies } from './api';
import Pagination from './components/Pagination';

function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [query, setQuery] = useState('');

  const handleSearch = async (query, page = 1) => {
    setQuery(query);
    const data = await fetchMovies(query, Math.ceil(page / 8));
    setMovies(data.Search ? data.Search.slice((page - 1) % 8 * 8, (page - 1) % 8 * 8 + 8) : []);
    setCurrentPage(page);
    setTotalResults(data.totalResults ? parseInt(data.totalResults, 10) : 0);
  };

  return (
    <Router>
      <div className=" m-0  min-h-screen bg-black lg:p-20 h-{100%} w-full">
        <SearchBar onSearch={(query) => handleSearch(query)} />
        <Routes>
          <Route path="/" element={
            <>
              <MovieList movies={movies} />
              <Pagination
                currentPage={currentPage}
                totalResults={totalResults}
                pageSize={8}
                onPageChange={(page) => handleSearch(query, page)}
              />
            </>
          } />
          <Route path="/movie-search-app/" element={
            <>
              <MovieList movies={movies} />
              <Pagination
                currentPage={currentPage}
                totalResults={totalResults}
                pageSize={8}
                onPageChange={(page) => handleSearch(query, page)}
              />
            </>
          } />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
