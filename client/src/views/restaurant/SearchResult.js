import '../../styles/Restaurant/searchResultList.css'


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
        
        
        <img src={`http://localhost:5001/uploads/products/${result.products[0].productImage}`} alt="product" style={{width: "30px", height: "30px", borderRadius : "20px" ,marginTop:"2px",marginLeft:"10px"}}/>
        <p style={{marginTop:"1px",marginLeft:"25%"}}>{result.products[0].productName}</p>
        </div>
        
     );
}
 
export default SearchResult;


