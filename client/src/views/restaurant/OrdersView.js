import React from 'react';
import '../../styles/RestaurantOrders.css';
import { OrderCountCard } from './orderCountCard';

export default function OrdersView() {
  const result = [
    { id: 1, title: 'New order', count: 2 },
    { id: 2, title: 'Processing order', count: 3 },
    { id: 3, title: 'Deliver to orders', count: 4 }
  ];

  return (
    <div>
      <div className="Upper-details">
        <OrderCountCard result={result[0]} style={{ marginLeft: '5%' }}/>
        <OrderCountCard result={result[1]} style={{ marginLeft: '15%' }}/>
        <OrderCountCard result={result[2]} style={{ marginLeft: '15%' }}/>
      </div>
      <div className="table-content"></div>
    </div>
  );
}
