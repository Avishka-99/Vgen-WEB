import React, { useEffect, useState } from 'react';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import '../../styles/RestaurantOrders.css';
import { OrderCountCard } from './orderCountCard';
import OrderMoreDetails from './OrderMoreDetails'

export default function OrdersView() {
  
  const user_id=localStorage.getItem('userId');
  const [orderDetails,SetOrderDetails]=useState([]);
  const [moreOrderDetails,SetMoreOrderDetails]=useState([]);
  const [popup,setPopup]=useState(false); 
    
   
   
    useEffect(() => {
      async function getOrdersDetails(){
        try {
          const res = await Axios.get(API_ENDPOINTS.getOrderDetails_URL, {
            params: {
              user_id: user_id,
            },
          });
          SetOrderDetails(res.data);
          
          
        } catch (err) {
          console.log('Error fetching data:', err);
          
        }
      };
      getOrdersDetails();
      
    }, [],[moreOrderDetails]);

    //card details
    const result = [];

    if (!orderDetails || !orderDetails.result_2) {
      return <p>Loading...</p>;
    }else{
      orderDetails.result_1.map((or)=>{
        if (or.orderState === 0) {
          result.push({ id: 1, title: 'New order', count: or.totalCount });
        } 
        else if(!(or.orderState === 1) && !(or.orderState === 2) ){
          result.push({ id: 1, title: 'New order', count: 0 });
        }
      });
      orderDetails.result_1.map((or)=>{
        if (or.orderState === 1) {
          result.push({ id: 2, title: 'Processing order', count: or.totalCount });
        } 
        else if(!(or.orderState === 0) && !(or.orderState === 2) ){
          result.push({ id: 2, title: 'Processing order', count: 0 });
        }
      });
      orderDetails.result_1.map((or)=>{
        if (or.orderState === 2) {
          result.push({ id: 3, title: 'Deliver to orders', count: or.totalCount });
        } 
        else if(!(or.orderState === 0) && !(or.orderState === 1) ){
          result.push({ id: 3, title: 'Deliver to orders', count: 0 });
        }
      });
      console.log(result)
     
    }
    
    //row click function
    const handleRowClick = (orderId,user_id) => () => {
      try {
        Axios.get(API_ENDPOINTS.getOrderMoreDetails_URL, {
          params: {
            order_id:orderId,
            user_id: user_id,
          },
        }).then((response) => {
          SetMoreOrderDetails(response.data)
          setPopup(true);
          
          
        });
      } catch (err) {
        console.log('Error fetching data:', err);
        
      }
    }
    const acceptHandle = (orderId) => () => {
        setPopup(false);
    }
    const rejectHandle = (orderId) => () => {
      setPopup(false);
   }
  
  var type="";
   const handleByOrderType = (type) => () => {
    try {
      Axios.get(API_ENDPOINTS.getOrderDetailsSorted_URL, {
        params: {
          order_type:type,
          user_id: user_id,
        },
      }).then((response) => {
        SetOrderDetails(response.data)
      });
    } catch (err) {
      console.log('Error fetching data:', err);
      
    }
  }
   
    
    

  return (
    <div>
      <div className="Upper-details">
        <OrderCountCard result={result[0]} customCss={{ marginLeft: '2%' }}/>
        <OrderCountCard result={result[1]} customCss={{ marginLeft: '15%' }}/>
        <OrderCountCard result={result[2]} customCss={{ marginLeft: '15%' }}/>

        <span>{}</span>
      </div>
      <div className="table-content">
        <div className="table-content-header">
          <button className="clickable-button" onClick={handleByOrderType(type="Dine in")}>Dine In</button>
          <button className="clickable-button" onClick={handleByOrderType(type="Delivery")}>Delivery</button>
          <button className="clickable-button" onClick={handleByOrderType(type="Take away")}>Take away</button>
        </div>
        <div className="table-content-details">
          {orderDetails.length==0?(
            <p>No orders</p>
          ):(
            <table style={{marginLeft : '2%'}}>
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Order Id</th>
                      <th>Order date</th>
                      <th>Order time</th>
                      <th>Order Type</th>
                      <th>Order status</th>
                      <th>Total amount</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  {orderDetails.result_2.map((o) => (
                    <tr key={o.orderId}  onClick={handleRowClick(o.orderId,user_id)}>
                      <td>{o.name}</td>
                      <td>{o.orderId}</td>
                      <td>{o.date}</td>
                      <td>{o.time}</td>
                      <td>{o.orderType}</td>
                      <td> {o.orderState===0 ? (
                            //complete the prepare
                            <p style={{color:'green'}}>new order</p>
                          ): (
                            " "
                          )}
                      </td>
                      <td>{"Rs:"}{o.amount}</td>
                      <td><button className='order-accept' onClick={acceptHandle(o.orderId)}>Accept</button></td>
                      <td><button className='order-reject'onClick={rejectHandle(o.orderId)}>Reject</button></td>
                    </tr>
                  ))}
                </tbody>

                  
          </table>

          )}
          
        </div>
        <div className="popup">
           <OrderMoreDetails trigger={popup} setTrigger={setPopup} result={moreOrderDetails}></OrderMoreDetails>
        </div>
      </div>
    </div>
  );
}
