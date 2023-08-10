import React from 'react';
import '../../styles/RestaurantOrders.css';

export const OrderCountCard = ({ result ,customCss }) => {
  return (
    <div className="order-card" style={customCss}>
      <h1>{result.title}</h1>
      <h2>{result.string}{result.count}</h2>
    </div>
  );
};
