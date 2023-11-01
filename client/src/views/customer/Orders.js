import React, { useEffect, useState } from "react";
import Axios from "../../api/Axios";
import "../../styles/Orders.css";
import { ProgressBar } from 'primereact/progressbar';
import LinearProgress from '@mui/material/LinearProgress';
import image1 from "./1.jpg";
import {Link, useNavigate} from "react-router-dom";

import image2 from "./2res.jpg";
import image3 from "./download.jpg";
import { setRef } from "@mui/material";


function Orders() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderState, setOrderState] = useState(0);
  const [isOrderCollected, setIsOrderCollected] = useState(false);
  const [rating, setRating] = useState(0);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);

  const images = [image1, image2, image3]; // Add your image URLs here
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await Axios.get(
          "http://localhost:5001/api/getOrders",
          {
            params: {
              userId: userId,
            },
          }
        );
        console.log(response.data);
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        // Handle error, show a toast message, etc.
      }
    };

    fetchOrders();
  }, [userId]);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setOrderState(order.orderState);
  };

  const handleOrderCollected = async () => {
    // Logic to handle order collection, e.g., send a request to update order state
    // After successful update, set isOrderCollected to true
    Axios.post("http://localhost:5001/api/updateOrderState", {
      orderId: selectedOrder.orderId,
      orderState: 3,
    });

    setIsOrderCollected(true);

  };
 const getOrderStatusProgress = (orderState) => {
    switch (orderState) {
      case 0:
        return 25;
      case 1:
        return 50;
      case 2:
        return 75;
      case 3:
        return 100;
      default:
        return 0;
    }
  };
  const handleRatingModalOpen = () => {
    setIsRatingModalOpen(true);
  }
  const handleStarClick = (starValue) => {
  setRating(starValue);
  }
  const handleRatingSubmit = async () => {
    setIsRatingModalOpen(false);
  }
  const handleOrderlocation = (order) => {
    navigate("/destination");
    localStorage.setItem("delivery",order.deliveryPersonId);

  }
  return (
    <div className="orders-container">
      <h1>Orders</h1>
      {orders.map((order) => (
        <div
          key={order.orderId}
          className="order-item"
          onClick={() => handleOrderClick(order)}
        >
          <p><strong>Order Id:</strong> {order.orderId}</p>
          <p><strong>Quantity:</strong> {order.totalQuantity}</p>
          <p><strong>Payment Type:</strong> {order.paymentType}</p>
          <p><strong>Date:</strong> {order.date}</p>
          <p><strong>Time:</strong> {order.time}</p>
        </div>
      ))}

      {selectedOrder && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedOrder(null)}>&times;</span>
            <div className="picture-slide">
              <img
                src={images[orderState]} // Display image based on order state
                alt="Order"
                style={{
                  width:'100px',
                  height:'100px',
                  borderRadius:'50%',
                  objectFit:'cover',
                  margin:'0 auto',
                 }}
              />
            </div>
            <p><strong>Order Type:</strong> {selectedOrder.totalQuantity}</p>
            <p><strong>Payment Type:</strong> {selectedOrder.paymentType}</p>
            <p><strong>Date:</strong> {selectedOrder.date}</p>
            <p><strong>Time:</strong> {selectedOrder.time}</p>
            <p><strong>Amount:</strong> {selectedOrder.amount}</p>
            <p><strong>Status:</strong></p>
            <div>
              <ProgressBar mode="determinate" value={getOrderStatusProgress(selectedOrder.orderState)} style={{ height: '20px' }} />
            </div>
            {orderState === 2 && !isOrderCollected && (
              <div>
              <button onClick={handleOrderCollected}>
                Confirm Order Collection
              </button>
              <button onClick={
                ()=>handleOrderlocation(selectedOrder)
              }>
                Track Order
              </button>
           </div>
            )}
            {orderState===3 
               && !selectedOrder.isRated && (
                <button onClick={handleRatingModalOpen}>
                  Rate Order
                </button>
              )
              

            }
            {
              isRatingModalOpen && (
                <div className="rating-modal">
                  <div className="rating-modal-content">
                    <span className="close" onClick={() => setIsRatingModalOpen(false)}>&times;</span>
                    <p>Rate your order</p>
                    <div className="rating-stars">
                      {[1,2,3,4,5].map((star) => 
                        (<span
                        key={star}
                        className={star <= rating ? "star-filled" : "star"}
                        onClick={() => handleStarClick(star)}>
                          &#9733;
                        </span>

                        )
            
                      )}
                    </div>
                    <button onClick={handleRatingSubmit}>Submit</button>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;



