import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // You can add logic to filter or perform search here
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
   // perform search here
    console.log("Perform search with:",searchTerm);
  }

  return (
    <form onSubmit={handleSearchSubmit} className="relative">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border rounded-3xl py-2 px-3 focus:outline-none focus:border-black pr-8" // Add pr-10
        />
        <button type="submit" className="absolute inset-y-0 right-2 flex items-center px-2 text-gray-500">
          <FaSearch />
        </button>
    </form>
  );
};

export default SearchBar;