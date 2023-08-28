import React, { useState, useEffect } from 'react';
import '../../styles/Restaurant/RestaurantShopping.css';
import SearchIcon from '@mui/icons-material/Search';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import CardComponent from './CardComponent';
import RowItems from './RowItems';

export default function Shopping() {
  const [shopDetails, setShopDetails] = useState([]);
  const [rowDetails, setRowDetails]=useState(false);

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

 console.log(rowDetails);

  return (
    <div className="Shopping-details">
      {rowDetails===true ?(
        <RowItems/>
      ):(
        <>
          <div className="shop_inner">
            <h1>Shop now</h1>
            <button className="shop-items-btb" onClick={()=>setRowDetails(true)}>shop items</button>
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
        </>

      )}
    
    </div>
  );
}
