import React, { useEffect, useState } from "react";
import Axios from "../../api/Axios";
import "../../styles/Orders.css";
import { ProgressBar } from 'primereact/progressbar';


function Orders() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedTimeInterval, setSelectedTimeInterval] = useState("3Days");
  const userId = localStorage.getItem("userId");

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
       
        const filteredOrders = filterOrdersByTimeInterval(response.data);
        setOrders(filteredOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
        // Handle error, show a toast message, etc.
      }
    };

    fetchOrders();
  }, [userId,selectedTimeInterval]); // Dependency on userId ensures the effect re-runs if userId changes

   
  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };
  const filterOrdersByTimeInterval = (ordersData) => {
    const currentDate = new Date();
    let filteredOrders = [];
  
    switch (selectedTimeInterval) {
      case "3Days":
        filteredOrders = ordersData.filter(order => {
          const orderDate = new Date(order.date);
          const timeDifference = currentDate - orderDate;
          const daysDifference = timeDifference / (1000 * 3600 * 24);
          console.log(daysDifference);
          return daysDifference <= 3;
         
          
        });
        break;
      case "week":
        filteredOrders = ordersData.filter(order => {
          const orderDate = new Date(order.date);
          const timeDifference = currentDate - orderDate;
          const daysDifference = timeDifference / (1000 * 3600 * 24);
          console.log(daysDifference);
          return daysDifference <= 7;
        });
        break;
      case "month":
        filteredOrders = ordersData.filter(order => {
          const orderDate = new Date(order.date);
          const timeDifference = currentDate - orderDate;
          const daysDifference = timeDifference / (1000 * 3600 * 24);
          console.log(daysDifference);
          return daysDifference <= 30;

        });
        break;
      case "year":
        filteredOrders = ordersData.filter(order => {
          const orderDate = new Date(order.date);
          const timeDifference = currentDate - orderDate;
          const daysDifference = timeDifference / (1000 * 3600 * 24);
          console.log(daysDifference);
          return daysDifference <= 365;
        });
        break;
      default:
        filteredOrders = ordersData;
    }
  
    // Sort filteredOrders based on date in descending order
    filteredOrders.sort((a, b) => new Date(b.date) - new Date(a.date));
  
    return filteredOrders;
  };
  


  const getOrderStatusText = (statusCheck) => {
    switch (statusCheck) {
      case 0:
        return "Pending - Order accepted";
      case 1:
        return "Preparing - Order is being prepared";
      case 2:
        return "Delivering - Order is on its way";
      default:
        return "Unknown Status";
    }
  };
  const getOrderStatusProgress = (statusCheck) => {
    switch (statusCheck) {
      case 0:
        return 25;
      case 1:
        return 50;
      case 2:
        return 75;
      default:
        return 0;
    }
  }



  return (
    <div className="orders-container">
      <h1>Orders</h1>
      <div className="dropdown">
        <label>Select Time Interval: </label>
        <select value={selectedTimeInterval} onChange={(e) => setSelectedTimeInterval(e.target.value)}>
          <option value="3Days">Last 3 Days</option>
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
          <option value="year">Last Year</option>
        </select>
      </div>
      {orders.map((order) => (
        <div
          key={order.orderId} // Assuming orderId is a unique identifier for orders
          className="order-item"
          onClick={() => handleOrderClick(order)}
        >
          <p><strong>Order Id:</strong> {order.orderId}</p>
          <p><strong>Order Type:</strong> {order.quantity}</p>
          <p><strong>Payment Type:</strong> {order.paymentType}</p>
          {order.orders.map((product) => (
            <div key={product.productId} className="product-info">
          <p><strong>Amount:</strong> {product.amount}</p>
          <p><strong>Date:</strong> {product.date}</p>
          <p><strong>Time:</strong> {product.time}</p>
          <p><strong>Order Status:</strong> {getOrderStatusText(product.orderState)}</p>
            </div>
          ))}

        </div>

      ))}
      {selectedOrder && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p><strong>Order Type:</strong> {selectedOrder.quantity}</p>
            <p><strong>Payment Type:</strong> {selectedOrder.paymentType}</p>
            {selectedOrder.orders.map((product) => (
              <div key={product.productId} className="product-info">
            <p><strong>Date:</strong> {product.date}</p>
            <p><strong>Time:</strong> {product.time}</p>
            <p><strong>Amount:</strong> {product.amount}</p>
            <p><strong>Status:</strong></p>
            <div style={{
             
              
            }}>
            <ProgressBar mode="determinate" value={getOrderStatusProgress(product.orderState)} style={{ height: '6px' }}></ProgressBar>
         </div>
          </div> 
            ))}
          </div>

        </div>
      )}
    </div>
  );
}

export default Orders;
