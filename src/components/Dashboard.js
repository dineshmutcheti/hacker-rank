// src/components/Dashboard.js
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';
import Pagination from './Pagination';
import axios from 'axios';

function Dashboard({ username }) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchResults = async (query, pageNumber = 0) => {
    try {
      const response = await axios.get(`https://hn.algolia.com/api/v1/search`, {
        params: { query, page: pageNumber }
      });
      setResults(response.data.hits);
      setTotalPages(response.data.nbPages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Welcome, {username}</h1>
      <SearchBar fetchResults={fetchResults} />
      <ResultsList results={results} />
      <Pagination page={page} totalPages={totalPages} setPage={setPage} fetchResults={fetchResults} />
    </div>
  );
}

export default Dashboard;
