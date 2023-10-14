import React, { useState, useEffect } from 'react';
import Axios from 'axios'; // Import Axios from the appropriate location
import * as ApiEndpoints from '../../api/ApiEndpoints';
import { useNavigate,useParams } from 'react-router-dom';
import "../../styles/selectedRestaurant.css";


function SelectedRestaurant() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const restaurantId = localStorage.getItem('restaurantId');
    useEffect(() => {
      
      console.log(restaurantId);
  
      if (!restaurantId) {
        console.log('Restaurant ID not available in local storage.');
        // If restaurantId is not available in local storage, navigate to a different page or handle the error.
        navigate('/home'); // Navigate to the home page or another appropriate page.

        return;
      }
      Axios.post("http://localhost:5001/api/fetchrestaurantproducts", {
        restaurantId: restaurantId, // Pass restaurantId directly without using "params"
      })
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    const handleSelectProduct = (productId) => {
      console.log(productId);
    }
  
    return (
      <div>
      <h1>Restaurant Products</h1>
      <div className="card-container">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div key={product.productId} className="card">
              <img
              className='card-img-top'
                src={`http://localhost:5001/uploads/products/${product.productImage}`}
                alt={product.productName}
              />
              <div className="card-body">
                <h2>{product.productName}</h2>
                <p>{product.description}</p>
                <p>Category: {product.product_category}</p>
                <p>Cooking Time: {product.cooking_time}</p>
                <button
                  className="select-button"
                  onClick={() => handleSelectProduct(product.productId)}
                >
                  Select
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
      
      
    );
}


export default SelectedRestaurant;
