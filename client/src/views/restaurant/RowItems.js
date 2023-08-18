import React, { useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import '../../styles/Restaurant/RestaurantShopping.css';
const RowItems = () => {



    return ( 
        <div className="Row-items-details">
        <div className="Row-items-details-inner">
          <h1>Shop items now</h1>
          <div className="mu-items-input-wrapperS">
            <SearchIcon />
            <input type="search" placeholder="type of search location" />
          </div>
          <div className="clickable-wrapper">
            <button className="raw-type-clickable-btn">Vegetable</button>
            <button className="raw-type-clickable-btn">Fruit</button>
            <button className="raw-type-clickable-btn">Milk</button>
            <button className="raw-type-clickable-btn">Other</button>
          </div>
        </div>
        {/* <div className="shop-cards-items">
          {RowItemDetails.map((ri) => (
            <CardComponent key={ri.userId} imageSrc={ri.image} name={ri.shopName} />
          ))}
        </div> */}
      </div>
     );
}
 
export default RowItems;