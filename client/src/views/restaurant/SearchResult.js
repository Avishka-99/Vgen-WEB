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
        {/* <span>{result.products[0].productName}</span> */}
        {/* <img src={`http://localhost:5001/uploads/products/${result.products[0].productImage}`} alt="product" style={{width: 20, height: 20}}/> */}
        </div>
        
     );
}
 
export default SearchResult;


