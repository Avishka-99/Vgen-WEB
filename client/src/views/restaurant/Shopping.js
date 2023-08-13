import React, { useState, useEffect } from 'react';
import '../../styles/RestaurantShopping.css';
import SearchIcon from '@mui/icons-material/Search';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import CardComponent from './CardComponent';

export default function Shopping() {
  const [shopDetails, setShopDetails] = useState([]);

  useEffect(() => {
    async function getShopDetails() {
      try {
        const res = await Axios.get(API_ENDPOINTS.getShopDetails_URL);
        setShopDetails(res.data);
      } catch (err) {
        console.log('Error fetching data:', err);
      }
    }
    getShopDetails();
  }, []);

  return (
    <div className="Shopping-details">
      <div className="shop_inner">
        <h1>Shop now</h1>
        <button className="shop-items-btb">shop items</button>
        <div className="mu-input-wrapperS">
          <SearchIcon />
          <input type="search" placeholder="type of search location" />
        </div>
      </div>
      <div className="shopCards">
        {shopDetails.map((sd) => (
          <CardComponent key={sd.userId} imageSrc={sd.image} name={sd.shopName} />
        ))}
      </div>
    </div>
  );
}
