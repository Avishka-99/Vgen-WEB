import React, { useState, useEffect } from 'react';
import Axios from 'axios'; // Import Axios from the appropriate location
import * as ApiEndpoints from '../../api/ApiEndpoints';
import { useNavigate } from 'react-router-dom';


function SelectedRestaurant() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const restaurantId = localStorage.getItem("restaurantId");
   console.log(restaurantId);
    useEffect(() => {
      
      console.log(restaurantId);
  
      if (!restaurantId) {
        console.log('Restaurant ID not available in local storage.');
        // If restaurantId is not available in local storage, navigate to a different page or handle the error.
        navigate('/home'); // Navigate to the home page or another appropriate page.

        return;
      }
  
        Axios.post("http://localhost:5001/api/fetchrestaurantproducts" , {
            params: {
                restaurantId: restaurantId,
            },
        })
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [restaurantId]);

  
    return (
        <div>
        <h1>Restaurant Products</h1>
        <ul>
          {products && products.length > 0 ? (
            products.map((product) => (
              <li key={product.productId}>
                <h2>{product.productName}</h2>
                <p>{product.description}</p>
                <p>Category: {product.product_category}</p>
                <p>Cooking Time: {product.cooking_time}</p>
        
              </li>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </ul>
      </div>
      
      
    );
}


export default SelectedRestaurant;
