import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q');

  // You can fetch or filter your documentation content based on the query here
  return (
    <div>
      <h1>Search Results for: "{query}"</h1>
      {/* Render search results */}
    </div>
  );
};

export default SearchResults;
