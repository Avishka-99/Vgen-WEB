import React from 'react';
import '../../styles/productCard.css';

export const ProductDetails = ({ productData}) => {
 console.log(productData);
  return (
 
    <div class="product-card-separate">
        <div class="product-card-left-separate">
            <img class="product-image" src={`http://localhost:5001/uploads/products/${productData.productImage}`} alt="Product Image" style={{width:"70px",height:"70px"}}/>
        </div>
        <div class="product-card-right-separate">
            <h5 class="product-name">{productData.productName}</h5>
            {/* <label htmlFor="" className='productCard-label'>price :</label> */}
            <p class="product-price">{"price: "}{"Rs:"}{productData.price}</p>
            {/* <label htmlFor="" className='productCard-label'>quantity :</label> */}
            <p class="product-quantity">{"quantity: "}{productData.quantity}</p>
        </div>
        
    </div>

  

  );
};
