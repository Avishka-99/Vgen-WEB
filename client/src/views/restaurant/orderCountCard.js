import React from 'react';
import '../../styles/RestaurantOrders.css';

export const OrderCountCard = ({ result }) => {
  return (
    <div className="order-card">
      <h1>{result.title}</h1>
      <span>{result.count}</span>
    </div>
  );
};
