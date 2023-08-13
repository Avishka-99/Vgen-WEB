import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as API_ENDPOINTS from '../../api/ApiEndpoints'
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { incrementCounter, removeFromCart } from "../../constants/ActionTypes"; // Import your action to remove items from the cart
import * as ToastMessages from '../../components/ToastMessages';
import Toast from '../../components/Toast';
import "../../styles/Cart.css";
import Axios from "../../api/Axios";

function Cart() {
  const cartItems = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeCartItem = (itemToRemove) => {
    dispatch(removeFromCart(itemToRemove)); // Dispatch the action to remove item from the cart
  };
  const handleOrder = async () => {
    const userId = localStorage.getItem("userId");

    const formData = new FormData();
    formData.append("userId", userId);
   
    formData.append("amount", calculateTotal());
    formData.append("quantity",countQuantity());

    formData.append("productId", cartItems[0].productId);
    formData.append("status", 1);
    formData.append("date", new Date().toLocaleDateString());
    formData.append("time", new Date().toLocaleTimeString());
    try{

      const res=await Axios.post(API_ENDPOINTS.orderPost_URL,formData,{

        headers:{
          "Content-Type":"application/json"
        }
      });
      console.log(res.data);
      //setFormData(res.data);
    }catch(err){
      console.log('Error fetching data:', err);
      
    }
  }
   //cartItems product id


 
const countQuantity = () => {
    let count = 0;
    for (const item of cartItems) {
      count += item.quantity;
  
    return count;
  };
}

  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.quantity;
    }
    return total;
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items1">
          {/* ... rest of your table */}
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Product Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="cart-item1">
                  {/* ... rest of your table row */}
                  <td>{item.productName}</td>
                  <td>
                    <img
                      src={`http://localhost:5001/uploads/products/${item.productImage}`}
                      alt="product"
                    />
                  </td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>

                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => removeCartItem(item)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div>
        <p>Quantity: {countQuantity()}</p>
      </div>
      <div className="total">
        <p>Total: Rs.{calculateTotal()}</p>
        <button className="btn" onClick={handleOrder}>Checkout</button> 
      
      </div>
      <button className="btn" onClick={navigateToHome}>
        Continue Shopping
      </button>
    </div>
  );
}

export default Cart;

