import React from "react";
import '../../styles/RestaurantProduct.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const RestaurantOneItem = ({result }) => {

  


    return (  

      <div className="one-outer-frame">
          <div className="one-frame-up">
          <img src={`http://localhost:5001/uploads/products/${result.products[0].productImage}`}  alt="product"/>
          </div>
          <div className="one-frame-down">

            <h3>{result.products[0].productName}</h3>
            
            <p>
                {result.products[0].productName} is one of the vegan foods. Its price is Rs. {result.price}.
                Currently, you have {result.quantity} items.This is{result.products[0].description}
            </p>
            <div className="one-quantity">
              <label htmlFor="">Product quantity: </label><br />
              <input type="text" value={result.quantity} />
              <button><AddIcon></AddIcon></button>
              <button><RemoveIcon></RemoveIcon></button><br />
            </div>
            <div className="one-price">
              <label htmlFor="">Product price: </label><br />
              <input type="text" value={result.price} />
              <button><AddIcon></AddIcon></button>
              <button><RemoveIcon></RemoveIcon></button><br />
            </div>
            <button className="one-delete">delete</button>
          </div>
      </div>
    );
}
 
export default RestaurantOneItem;