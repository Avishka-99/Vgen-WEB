import React, { useState } from 'react'

import '../../styles/RestaurantProduct.css'
import RestaurantProductAdd from './RestaurantProductAdd';

export default function RestaurantProducts() {
  const [popup,setPopup]=useState(false);
  

  return (
   
   
   <div className="produxt-details">
       <h1>Restaurant products</h1>
       <button className='Product-add-btn' onClick={()=>setPopup(true)}>Add product</button>
       <RestaurantProductAdd trigger={popup} setTrigger={setPopup}></RestaurantProductAdd>

   </div>


  )
}
