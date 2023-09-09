import React from "react";
import '../../styles/Restaurant/RestaurantProduct.css'
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const RestaurantOneItem = ({result ,SetIsOneSet,setDel_productId,setDeletePopup }) => {

  


    return (  

      <div className="one-outer-frame">
          <div className="one-frame-up">
          <button className='p_Close-Btn' onClick={()=>SetIsOneSet(false)} ><KeyboardBackspaceIcon/></button>
          <img src={`http://localhost:5001/uploads/products/${result.products[0].productImage}`}  alt="product"/>
          </div>
          <div className="one-frame-down">
            
            <h3>{result.products[0].productName}</h3>
            
            <p>
                {result.products[0].productName} is one of the vegan foods. Its price is Rs. {result.price} per {result.priceBase}.
                Currently, you have {result.quantity} of {result.priceBase} items.This is{result.products[0].description}
            </p>
            <div className="one-quantity">
              <label htmlFor="">Product quantity: </label><br />
              <input type="text" value={result.quantity + ' ' + result.priceBase} />
              {/* <button><AddIcon style={{fontSize:"15px"}}></AddIcon></button>
              <button><RemoveIcon style={{fontSize:"15px"}}></RemoveIcon></button><br /> */}
              <button className="update-one-product">Update</button>
            </div>
            <div className="one-price">
              <label htmlFor="">Product price: </label><br />
              <input type="text" value={'Rs :' + ' ' + result.price + ' ' +' per'+ ' ' + result.priceBase} />
              {/* <button><AddIcon style={{fontSize:"15px"}}></AddIcon></button>
              <button><RemoveIcon style={{fontSize:"15px"}}></RemoveIcon></button><br /> */}
              <button className="update-one-product">Update</button>
            </div>
            <button className="one-delete" onClick={()=>{setDel_productId(result.products[0].productId);setDeletePopup(true)}}>delete</button>
          </div>
      </div>
    );
}
 
export default RestaurantOneItem;