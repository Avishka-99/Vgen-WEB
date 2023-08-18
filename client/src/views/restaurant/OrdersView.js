import React, { useEffect, useState } from 'react';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import '../../styles/Restaurant/RestaurantOrders.css';
import { OrderCountCard } from './orderCountCard';
import OrderMoreDetails from './OrderMoreDetails'

export default function OrdersView() {
  
  const user_id=localStorage.getItem('userId');
  const [orderDetails,SetOrderDetails]=useState([]);
  const [moreOrderDetails,SetMoreOrderDetails]=useState(null);
  const [popup,setPopup]=useState(false); 
  const [acceptOrders,setAcceptOrders]=useState(false); 
  
   
    // useEffect(() => {
      
      
    //   // async function getOrdersDetails(){
    //   //   try {
    //   //     Axios.get(API_ENDPOINTS.getOrderDetails_URL, {
    //   //       params: {
    //   //         user_id: user_id,
    //   //       },
    //   //     });
    //   //     SetOrderDetails(res.data);
          
          
    //   //   } catch (err) {
    //   //     console.log('Error fetching data:', err);
          
    //   //   }
    //   // };
    //   // getOrdersDetails();
      
    // }, []);

    useEffect(() => {
      (async () => {
        const res = await Axios.get(API_ENDPOINTS.getOrderDetails_URL, {
            params: {
              user_id: user_id,
            },
          });
          SetOrderDetails(res.data);
        
      })();
    },[]);

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
          result.push({ id: 3, title: 'Finalized orders', count: or.totalCount });
        } 
        else if(!(or.orderState === 0) && !(or.orderState === 1) ){
          result.push({ id: 3, title: 'Finalized orders', count: 0 });
        }
      });
      console.log(result)
     
    }
    
    //row click function
    const handleRowClick = (orderId,user_id) => {
      console.log('hello')
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
    
    const acceptHandle = async (orderId,orderState) => {

      var newOrderState=orderState+1;
      console.log(newOrderState);
      console.log(orderId);
      try {
        const response=await Axios.post(API_ENDPOINTS.updateOrderState_URL,{
          params:{
            order_id:orderId,
            order_state:newOrderState,
          }
        });
        console.log("Axios Response:", response.data);
      } catch (err) {
        console.log('Error fetching data:', err);
        
      }

    }


    const rejectHandle = (orderId) => {
      
   }
  
  var type="";
   const handleByOrderType = (type) => {
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

  const handleAcceptOrders=()=> {
    try {
      setAcceptOrders(true);
      Axios.get(API_ENDPOINTS.getAcceptOrders_URL, {
        params: {
          
          user_id: user_id,
        },
      }).then((response) => {
        SetOrderDetails(response.data)
      });
    } catch (err) {
      console.log('Error fetching data:', err);
      
    }
  }
   console.log(acceptOrders);
    
    

  return (
    <div>
      <div className="Upper-details">
        <OrderCountCard result={result[0]} customCss={{ marginLeft: '2%' }}/>
        <OrderCountCard result={result[1]} customCss={{ marginLeft: '15%' }}/>
        <OrderCountCard result={result[2]} customCss={{ marginLeft: '15%' }}/>

       
      </div>
      
      <div className="table-content">
        <div className="table-content-header">
          <button className="clickable-button" onClick={()=>handleByOrderType(type="Dine in")}>Dine In</button>
          <button className="clickable-button" onClick={()=>handleByOrderType(type="Delivery")}>Delivery</button>
          <button className="clickable-button" onClick={()=>handleByOrderType(type="Take away")}>Take away</button>
        </div>
        <button className="accept-orders" onClick={handleAcceptOrders}>Accept orders</button>

        <div className="table-content-details">
          {orderDetails.length==0?(
            <p>No orders</p>
          ):(acceptOrders===true?(
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
                {/* <th>Total quantity</th> */}
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {orderDetails.result_2.map((o) => (
              <tr key={o.orderId}  >
                <td onClick={()=>handleRowClick(o.orderId,user_id)}>{o.name}</td>
                <td onClick={()=>handleRowClick(o.orderId,user_id)}>{o.orderId}</td>
                <td onClick={()=>handleRowClick(o.orderId,user_id)}> {o.date}</td>
                <td onClick={()=>handleRowClick(o.orderId,user_id)}>{o.time}</td>
                <td onClick={()=>handleRowClick(o.orderId,user_id)}>{o.orderType}</td>
                <td onClick={()=>handleRowClick(o.orderId,user_id)}>  {o.orderState===1 ? (
                      //complete the prepare
                      <p style={{color:'green'}}>accept orders</p>
                    ): (
                      " "
                    )}
                </td>
                <td onClick={()=>handleRowClick(o.orderId,user_id)}>{"Rs:"}{o.amount}</td>
                {/* <td>{o.totalQuantity}</td> */}
                <td><button className='order-accept' onClick={()=>acceptHandle(o.orderId,o.orderState)}>Finalized</button></td>
               
              </tr>
            ))}
          </tbody>

            
         </table>
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
                {/* <th>Total quantity</th> */}
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {orderDetails.result_2.map((o) => (
              <tr key={o.orderId}  >
                <td onClick={()=>handleRowClick(o.orderId,user_id)}>{o.name}</td>
                <td onClick={()=>handleRowClick(o.orderId,user_id)}>{o.orderId}</td>
                <td onClick={()=>handleRowClick(o.orderId,user_id)}> {o.date}</td>
                <td onClick={()=>handleRowClick(o.orderId,user_id)}>{o.time}</td>
                <td onClick={()=>handleRowClick(o.orderId,user_id)}>{o.orderType}</td>
                <td onClick={()=>handleRowClick(o.orderId,user_id)}>  {o.orderState===0 ? (
                      //complete the prepare
                      <p style={{color:'green'}}>new order</p>
                    ): (
                      " "
                    )}
                </td>
                <td onClick={()=>handleRowClick(o.orderId,user_id)}>{"Rs:"}{o.amount}</td>
                {/* <td>{o.totalQuantity}</td> */}
                <td><button className='order-accept' onClick={()=>acceptHandle(o.orderId,o.orderState)}>Accept</button></td>
                <td><button className='order-reject'onClick={()=>rejectHandle(o.orderId)}>Reject</button></td>
              </tr>
                  ))}
            </tbody>

                  
          </table>

          ))}
          
        </div>
        <div className="popup">
           <OrderMoreDetails trigger={popup} setTrigger={setPopup} result={moreOrderDetails}></OrderMoreDetails>
        </div>
      </div>
    </div>
  );
}
