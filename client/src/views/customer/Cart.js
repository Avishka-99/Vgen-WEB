import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as API_ENDPOINTS from '../../api/ApiEndpoints'
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { incrementCounter, removeFromCart } from "../../constants/ActionTypes"; // Import your action to remove items from the cart
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
    try {
      const formData = new FormData();
      cartItems.forEach((item, index) => {
        formData.append(`products[${index}][productId]`, item.productId);
        formData.append(`products[${index}][quantity]`, item.quantity);
        formData.append(`products[${index}][price]`, item.price);
      });

      formData.append('total', calculateTotal());
      formData.append('userId', JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userId);
      formData.append('orderStatus', 'pending');
      formData.append('orderDate', new Date());

      const response = await Axios.post(API_ENDPOINTS.orderPost_URL, formData);

      console.log('Order placed successfully:', response.data);

      cartItems.forEach((item) => {
        dispatch(removeFromCart(item));
      });

      navigate('/confirmation');
    } catch (error) {
      console.error('Error placing order:', error);
    }
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

