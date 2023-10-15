import React from "react";
import { useSelector } from 'react-redux';
const SearchResults = () => {
  const searchResults = useSelector((state) => state.search.searchResults);

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;

