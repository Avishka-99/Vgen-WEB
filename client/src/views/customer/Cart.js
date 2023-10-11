import React ,{useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as API_ENDPOINTS from '../../api/ApiEndpoints'
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { incrementCounter, removeFromCart,resetCart } from "../../reducers/SetUserReducer"; // Import your action to remove items from the cart
import * as ToastMessages from '../../components/ToastMessages';
import Toast from '../../components/Toast';
import "../../styles/Cart.css";
import Axios from "../../api/Axios";

function Cart() {
  const cartItems = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  const [limitError, setLimitError] = useState('');
  const navigate = useNavigate();
  const [orderType, setOrderType] = useState("Take Away");
  const [paymentType, setPaymentType] = useState("Cash");

  const removeCartItem = (itemToRemove) => {
    dispatch(removeFromCart(itemToRemove)); // Dispatch the action to remove item from the cart
  };
  const handleOrder = async () => {
    const userId = localStorage.getItem("userId");

    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("orderType", orderType);
   formData.append("paymentType", paymentType);
   formData.append("amount", calculateTotal());
    formData.append("status", 0);
    formData.append("date",new Date().toLocaleDateString());
    formData.append("time",new Date().toLocaleTimeString());
    cartItems.forEach((item, index) => {
      formData.append(`productId[${index}]`, item.productId); // Use an array to handle multiple productId values
      formData.append(`quantity[${index}]`, item.quantity);
      formData.append(`price[${index}]`,item.price); // Use an array to handle multiple quantity values
    });
   
    try{

      const res=await Axios.post(API_ENDPOINTS.orderPost_URL,formData,{

        headers:{
          "Content-Type":"application/json"
        }
      });
      console.log(res.data);
      //setFormData(res.data);
      dispatch(resetCart());
      dispatch(incrementCounter(0));
      ToastMessages.success("Order Placed Successfully");
    }catch(err){
      console.log('Error fetching data:', err);
     ToastMessages.error("Something went wrong");
      
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
        <select value={orderType} onChange={(e) => setOrderType(e.target.value)}>
          <option value="Take Away">Take Away</option>
          <option value="Dine In">Dine In</option>
          </select>
      </label>
      <label>
        Payment Type:
        <select value={paymentType} onChange={(e) => setPaymentType(e.target.value)}>
          <option value="Cash">Cash</option>
          <option value="Online">Online</option>
          </select>
      </label>
      </div>
    <div className="cart-summary">
      <p>Quantity: {cartItems.length}</p>
      <p className="total">Total: Rs.{calculateTotal()}</p>
      <button className="btn checkout" onClick={handleOrder}>Checkout</button>
      {limitError && <p className="limit-error">{limitError}</p>}
    </div>
    <button className="btn continue-shopping" onClick={navigateToHome}>
      Continue Shopping
    </button>
    <Toast duration={3000} />
  </div>
  
  );
}

export default Cart;

