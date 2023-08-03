import React, { useEffect, useState } from 'react'

import '../../styles/RestaurantProduct.css'
import RestaurantProductAdd from './RestaurantProductAdd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import RestaurantItem from './RestaurantItem ';

export default function RestaurantProducts() {
  const [popup,setPopup]=useState(false);
  const [products,setProducts]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
 
  const user_id=localStorage.getItem('userId');
  const getProducts = async () => {
    try {
      const res = await Axios.get(API_ENDPOINTS.getAllProduct_URL, {
        params: {
          user_id: user_id,
        },
      });
  
      setProducts(res.data);
     
      setIsLoading(false);
    } catch (err) {
      console.log('Error fetching data:', err);
      setIsLoading(false);
    }
  };
 
 
  useEffect(() => {
     getProducts();
  }, [])
  useEffect(() => {
    console.log(products);
 }, [products])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  

  return (
   
   
   <div className="product-details">
       <div className="product-details-header">
          <h1>Restaurant products</h1>
          <button className='Product-add-btn' onClick={()=>setPopup(true)}>Add product</button>
       </div>
      <div className="product-details-content">
        {popup===true ?(
          <div className="popup">
            <RestaurantProductAdd trigger={popup} setTrigger={setPopup}></RestaurantProductAdd>
          </div>
        ) : (
          
        <div className="product-card">
          {!isLoading && (
            products.length === 0 ? (
              <p>No products</p>
            ) : (
              <Carousel responsive={responsive}>
                {products.map(o => (<RestaurantItem key={o.id} data={o}/>))}
              </Carousel>
            )
          )}
        </div>
        )}
        
        
        
      </div>
      
      
   </div>


  )
}
