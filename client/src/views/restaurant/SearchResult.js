import '../../styles/searchResultList.css'


import React from 'react';

const SearchResult = ({ result, oneProductHandle}) => {
    const handleClick = () => {
        oneProductHandle(result);
    };
    return ( 
        
        <div
            className="search-result"
            onClick={handleClick}
        >
        {result.products[0].productName}
        
        </div>
        
     );
}
 
export default SearchResult;


