import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Axios from "../../api/Axios";
import StripeCheckout from "./StripeCheckout";
import { Elements } from "@stripe/react-stripe-js";
import {
  removeFromCart,
  resetCart,
  incrementCounter,
} from "../../reducers/SetUserReducer";
import * as API_ENDPOINTS from "../../api/ApiEndpoints";
import * as ToastMessages from "../../components/ToastMessages";
import Toast from "../../components/Toast";
import "../../styles/Cart.css";

function Cart() {
  const cartItems = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  const [orderType, setOrderType] = useState("Take Away");
  const [paymentType, setPaymentType] = useState("Cash");
  const [showStripeModal, setShowStripeModal] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("pending");

  const navigate = useNavigate();

  const removeCartItem = (itemToRemove) => {
    dispatch(removeFromCart(itemToRemove));
  };

 


  const placeOrder = async ()=> {

    
    try {
      const userId = localStorage.getItem("userId");
      // ... orderData setup ...
      const orderData = {
        userId: userId,
        orderType: orderType,
        paymentType: paymentType,
        amount: calculateTotal(),
        status: 0,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        products: cartItems.map(item => ({
          productId: item.productId,
          quantity: parseInt(item.quantity, 10),
          price: item.price,
        })),
      };
      const response = await Axios.post("http://localhost:5001/api/orderPost/",
        orderData 
        ,{
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Handle successful order placement
        console.log("Order placed successfully:", response.data);
        dispatch(resetCart());
        dispatch(incrementCounter(0));
        ToastMessages.success("Order Placed Successfully");
        navigate("/Orders");
      } else {
        // Handle non-2xx responses here
        throw new Error("Order placement failed. Please try again.");
      }
    } catch (error) {
      console.error("Error placing order:", error.response);
      ToastMessages.error(error.message);
    }
  };



 

  
  

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
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="product-info">
                <img
                  className="product-image3"
                  src={`http://localhost:5001/uploads/products/${item.productImage}`}
                  alt="product"
                />
                <div className="product-details">
                  <p className="product-name">{item.productName}</p>
                  <p className="quantity">Quantity: {item.quantity}</p>
                  <p className="price">Price: Rs.{item.price}</p>
                </div>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeCartItem(item)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="order-type">
        <label>
          Order Type:
          <select
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
          >
            <option value="Take Away">Take Away</option>
            <option value="Dine In">Dine In</option>
          </select>
        </label>
        <label>
          Payment Type:
          <select
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
          >
            <option value="Cash">Cash</option>
            <option value="Online">Online</option>
          </select>
        </label>
      </div>
      <div className="cart-summary">
        <p>Quantity: {cartItems.length}</p>
        <p className="total">Total: Rs.{calculateTotal()}</p>
        <button className="btn checkout" onClick={placeOrder}>
  Checkout
</button>
      </div>
      <button className="btn continue-shopping" onClick={navigateToHome}>
        Continue Shopping
      </button>
  
      <Toast duration={3000} />
    </div>
  );
}

export default Cart;


