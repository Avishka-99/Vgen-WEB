import React, { useEffect, useState } from 'react';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import '../../styles/RestaurantOrders.css';
import { OrderCountCard } from './orderCountCard';
import OrderMoreDetails from './OrderMoreDetails'

export default function OrdersView() {
  
  const user_id=localStorage.getItem('userId');
  const [orderDetails,SetOrderDetails]=useState([]);
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
    }, []);

    //card details
    const result = [];

    if (!orderDetails || !orderDetails.result_2) {
      return <p>Loading...</p>;
    }else{
      orderDetails.result_1.map((or)=>{
        if (or.orderState === 0) {
          result.push({ id: 1, title: 'New order', count: or.totalCount });
        } else if (or.orderState === 1) {
          result.push({ id: 2, title: 'Processing order', count: or.totalCount });
        } else {
          result.push({ id: 3, title: 'Deliver to orders', count: or.totalCount });
        }
      });
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
          <button>sorted view</button>
        </div>
        <div className="table-content-details">
          <table>
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Order Id</th>
                      <th>Order date</th>
                      <th>Order time</th>
                      <th>Order status</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  {orderDetails.result_2.map((o) => (
                    <tr key={o.orderId}  onClick={()=>setPopup(true)}>
                      <td>{o.name}</td>
                      <td>{o.orderId}</td>
                      <td>{o.date}</td>
                      <td>{o.time}</td>
                      <td> {o.orderState===0 ? (
                            //complete the prepare
                            <p style={{color:'green'}}>new order</p>
                          ): (
                            " "
                          )}
                      </td>
                      <td><button>Accept</button></td>
                      <td><button>reject</button></td>
                    </tr>
                  ))}
                </tbody>

                  
          </table>
        </div>
        <div className="popup">
           <OrderMoreDetails trigger={popup} setTrigger={setPopup}></OrderMoreDetails>
            
          </div>
      </div>
    </div>
  );
}
