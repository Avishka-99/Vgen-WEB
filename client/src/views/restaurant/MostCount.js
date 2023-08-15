import React from 'react';
import '../../styles/productCard.css';

export const MostCount = ({ productData}) => {
 console.log(productData);
  return (
 
    <div class="product-card-separate">
        <div class="product-card-left-separate">
            <img class="product-image" src={`http://localhost:5001/uploads/products/${productData.productImage}`}  style={{width:"70px",height:"70px"}} alt="Product Image"/>
        </div>
        <div class="product-card-right-separate">
            <h5 class="product-name">{productData.productName}</h5>
            <p class="product-quantity">{"Number of time to order: "}{productData.count}</p>
            
        </div>
        
    </div>

  

  );
};
