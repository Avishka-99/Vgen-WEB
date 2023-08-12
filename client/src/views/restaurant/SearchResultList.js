import '../../styles/searchResultList.css'
import React from 'react';
import SearchResult from './SearchResult';

const SearchResultList = ({results , oneProductHandle}) => {
    return ( 
        <div className="result-list">
             {results.map((result, id) => {
                return <SearchResult result={result} key={id} oneProductHandle={oneProductHandle} />;
                
             })}
        </div>
     );
}
 
export default SearchResultList;