import React from "react";
import { useEffect, useState } from 'react';
import '../../styles/Restaurant/RestaurantProduct.css'
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import Toast from '../../components/Toast';
import * as ToastMessages from '../../components/ToastMessages';
const RestaurantOneItem = ({ result, SetIsOneSet, setDel_productId, setDeletePopup }) => {

  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    console.log("gknkfnjvf", result)
    setPrice(result.price);
    setQuantity(result.quantity)
  }, [])

  const manageProduct = async () => {
    try {
      const response = await Axios.post(API_ENDPOINTS.updateProductL, {
        params: {
          productId: result.productId,
          price: price,
          quantity: quantity
        },
      }).then((response)=>showToast(response.data));
      console.log("Axios Response:", response.data);
    } catch (err) {
      console.log('Error fetching data:', err);
    }
  }

  const showToast=(data)=>{
    if(data.type==='success'){
      ToastMessages.success(data.message);
    }else{
      ToastMessages.error(data.message);
    }
  }

  return (

    <div className="one-outer-frame">
      <div className="one-frame-up">
        <button className='p_Close-Btn' onClick={() => SetIsOneSet(false)} ><KeyboardBackspaceIcon /></button>
        <img src={`http://localhost:5001/uploads/products/${result.products[0].productImage}`} alt="product" />
      </div>
      <div className="one-frame-down">

        <h3>{result.products[0].productName}</h3>

        <p>
          {result.products[0].productName} is one of the vegan foods. Its price is Rs. {result.price} per {result.priceBase}.
          Currently, you have {result.quantity} of {result.priceBase} items.This is{result.products[0].description}
        </p>
        <div className="one-quantity">
          <label htmlFor="">Product quantity: </label><br />
          <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          {/* <button><AddIcon style={{fontSize:"15px"}}></AddIcon></button>
              <button><RemoveIcon style={{fontSize:"15px"}}></RemoveIcon></button><br /> */}
          <button className="update-one-product" onClick={() => manageProduct()}>Update</button>
        </div>
        <div className="one-price">
          <label htmlFor="">Product price: ( {result.priceBase} ) </label><br />
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
          {/* <button><AddIcon style={{fontSize:"15px"}}></AddIcon></button>
              <button><RemoveIcon style={{fontSize:"15px"}}></RemoveIcon></button><br /> */}
          <button className="update-one-product" onClick={() => manageProduct()}>Update</button>
        </div>
        <button className="one-delete" onClick={() => { setDel_productId(result.products[0].productId); setDeletePopup(true) }}>delete</button>
      </div>
      <Toast duration={3000} />
    </div>

  );
}

export default RestaurantOneItem;