import React, { useEffect, useState } from 'react'

import '../../styles/RestaurantProduct.css'
import RestaurantProductAdd from './RestaurantProductAdd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';

export default function RestaurantProducts() {
  const [popup,setPopup]=useState(false);
  const [products,setProducts]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  useEffect(() => {
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
    getProducts();
   
  }, [])

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
   
   
   <div className="produxt-details">
       <h1>Restaurant products</h1>
       <button className='Product-add-btn' onClick={()=>setPopup(true)}>Add product</button>
       <RestaurantProductAdd trigger={popup} setTrigger={setPopup}></RestaurantProductAdd>
       <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
   </div>


  )
}
