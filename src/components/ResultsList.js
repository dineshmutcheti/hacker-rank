// src/components/ResultsList.js
import React from 'react';

function ResultsList({ results }) {
  return (
    <div style={{ padding: '20px' }}>
      {results.map((item) => (
        <div key={item.objectID} style={{ marginBottom: '10px' }}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
          <p>Author: {item.author}</p>
        </div>
      ))}
    </div>
  );
}

export default ResultsList;
