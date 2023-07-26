import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/RestaurantProduct.css'

export default function RestaurantProducts() {
  return (
   
   
   <div className="produxt-details">
       <h1>Restaurent products</h1>
       <Link className='product-add-link' to='/addRestaurantProducts'>Add product</Link>

   </div>


  )
}
