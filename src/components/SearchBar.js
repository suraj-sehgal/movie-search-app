import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center lg:mt-4 sm:my-8 sm:py-8 ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        className="border p-2 w-1/2 rounded-lg"
      />
      <button type="submit" className="bg-blue-500 rounded-lg   hover:bg-blue-800 text-white p-2 ml-2">Search</button>
    </form>
  );
};

export default SearchBar;
