// src/components/SearchBar.js
import React, { useState } from 'react';

function SearchBar({ fetchResults }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    fetchResults(query, 0); // Start from the first page on a new search
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <input 
        type="text" 
        placeholder="Search Hacker News" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
