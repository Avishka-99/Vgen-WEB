import React, { useEffect, useState } from 'react';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import '../../styles/Restaurant/RestaurantOrders.css';
import { OrderCountCard } from './orderCountCard';
import OrderMoreDetails from './OrderMoreDetails'
import * as ToastMessages from '../../components/ToastMessages';
import Toast from '../../components/Toast';

export default function OrdersView() {
  
  const [orderType,setOrderType]=useState([]);
  const [orderDetails,setOrderDetails]=useState([]);
  const user_id=localStorage.getItem('userId');
  const [moreOrderDetails,SetMoreOrderDetails]=useState(null);
  const [popup,setPopup]=useState(false); 
  const [acceptOrder,SetAcceptOrder]=useState(false);


    useEffect(() => {
     getData();
    },[]);

    
    const getData=async () => {
      try {
        const [res1, res2] = await Promise.all([
          Axios.get(API_ENDPOINTS.getOrderTypeCountToday_URL, {
            params: {
              user_id: user_id,
            },
          }),
          Axios.get(API_ENDPOINTS.getOrderDetails_URL, {
            params: {
              user_id: user_id,
            },
          })
        ]);
  
        setOrderType(res1.data);
        setOrderDetails(res2.data);
        
        
      } catch (err) {
        console.log('Error fetching data:', err);
        
      }
  };

    //card details
    
    const result = [
      { id: 1, title: 'New orders', count: 0 },
      { id: 2, title: 'Processing orders', count: 0 },
      { id: 3, title: 'Finalized orders', count: 0 },
      { id: 4, title: 'Reject orders', count: 0 },

  ];

  if (orderType.length > 0) {
      orderType.forEach((or) => {
          if (or.orderState === 0) {
              // Find the existing object with id 1 and replace it
              const index = result.findIndex(item => item.id === 1);
              if (index !== -1) {
                  result[index] = { id: 1, title: 'New orders', count: or.totalCount };
              }
          }
          if (or.orderState === 1) {
              // Find the existing object with id 2 and replace it
              const index = result.findIndex(item => item.id === 2);
              if (index !== -1) {
                  result[index] = { id: 2, title: 'Processing orders', count: or.totalCount };
              }
          }
          if (or.orderState === 2) {
            // Find the existing object with id 3 and replace it
            const index = result.findIndex(item => item.id === 3);
            if (index !== -1) {
                result[index] = { id: 3, title: 'Finalized orders', count: or.totalCount };
            }
          }
          if (or.orderState === -1) {
              // Find the existing object with id 4 and replace it
              const index = result.findIndex(item => item.id === 4);
              if (index !== -1) {
                  result[index] = { id: 4, title: 'Reject orders', count: or.totalCount };
              }
          }
      });
  }

  
    
  //   //row click function
  //   const handleRowClick = (orderId,user_id) => {
  //     console.log('hello')
  //     try {
  //       Axios.get(API_ENDPOINTS.getOrderMoreDetails_URL, {
  //         params: {
  //           order_id:orderId,
  //           user_id: user_id,
  //         },
  //       }).then((response) => {
  //         SetMoreOrderDetails(response.data)
  //         setPopup(true);
          
          
  //       });
  //     } catch (err) {
  //       console.log('Error fetching data:', err);
        
  //     }
  //   }
    
  //   const acceptHandle = async (orderId,orderState) => {

  //     var newOrderState=orderState+1;
  //     console.log(newOrderState);
  //     console.log(orderId);
  //     try {
  //       const response=await Axios.post(API_ENDPOINTS.updateOrderState_URL,{
          
  //           order_id:orderId,
  //           order_state:newOrderState,
         
  //       });
  //       console.log("Axios Response:", response.data);
  //     } catch (err) {
  //       console.log('Error fetching data:', err);
        
  //     }

  //   }


  //   const rejectHandle = (orderId) => {
      
  //  }
  
  // var type="";
  //  const handleByOrderType = (type) => {
  //   try {
  //     Axios.get(API_ENDPOINTS.getOrderDetailsSorted_URL, {
  //       params: {
  //         order_type:type,
  //         user_id: user_id,
  //       },
  //     }).then((response) => {
  //       SetOrderDetails(response.data)
  //     });
  //   } catch (err) {
  //     console.log('Error fetching data:', err);
      
  //   }
  // }

  // const handleAcceptOrders=()=> {
  //   try {
  //     setAcceptOrders(true);
  //     Axios.get(API_ENDPOINTS.getAcceptOrders_URL, {
  //       params: {
          
  //         user_id: user_id,
  //       },
  //     }).then((response) => {
  //       SetOrderDetails(response.data)
  //     });
  //   } catch (err) {
  //     console.log('Error fetching data:', err);
      
  //   }
  // }
  //  console.log(acceptOrders);
  
  var type="";
  const handleByOrderType = (type) => {
      if(acceptOrder===true){
          try {
              Axios.get(API_ENDPOINTS.getRestaurantOrderDetailsInSortedByTypeWithAccepted_URL,{
                  params: {
                  order_type:type,
                  user_id: user_id,
                  },
              }).then((response) => {
                  setOrderDetails(response.data)
          });
          } catch (err) {
              console.log('Error fetching data:', err);
          }
      }
      else{
          try {
              Axios.get(API_ENDPOINTS.getOrderDetailsSorted_URL,{////
                  params: {
                  order_type:type,
                  user_id: user_id,
                  },
              }).then((response) => {
                  setOrderDetails(response.data)
          });
          } catch (err) {
              console.log('Error fetching data:', err);
          }
      }
     
 }
 
 const handleOrderVersion=()=>{
     SetAcceptOrder(!acceptOrder);
     
     if(acceptOrder===true){
          try {
          Axios.get(API_ENDPOINTS.getOrderDetails_URL,{//////
              params: {
              user_id: user_id
              },
          }).then((response) => {
              setOrderDetails(response.data)
          });
          } catch (err) {
          console.log('Error fetching data:', err);
          }
     }
     else{
      try {
          Axios.get(API_ENDPOINTS.getRestaurantAcceptedOrderDetailsInTableToday_URL,{
              params: {
              user_id: user_id
              },
          }).then((response) => {
              setOrderDetails(response.data)
          });
          } catch (err) {
          console.log('Error fetching data:', err);
          }
      }
 }
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
  const handleAccept= async (orderId,orderState)=>{
      var newOrderState=orderState+1;
      console.log(newOrderState);
      console.log(orderId);
      try {
        const response= await Axios.post(API_ENDPOINTS.updateOrderState_URL,{
            order_id:orderId,
            order_state:newOrderState,
        }).then((response)=>showToast(response.data));;
        console.log("Axios Response:", response.data);
      } catch (err) {
        console.log('Error fetching data:', err);
        
      }

  }
  const handleAcceptPre= async (orderId,orderState)=>{
    var newOrderState=orderState+1;

    try {
      const response= await Axios.post(API_ENDPOINTS.updateOrderStateToFinal_URL,{
          order_id:orderId,
          order_state:newOrderState,
      }).then((response)=>showToast(response.data));
      
    } catch (err) {
      console.log('Error fetching data:', err);
      
    }

}

  const handleReject= async (orderId)=>{
      var newOrderState=-1;
      console.log(newOrderState);
      console.log(orderId);
      try {
        const response= await Axios.post(API_ENDPOINTS.updateOrderRejectState_URL,{
            order_id:orderId,
            order_state:newOrderState,
        }).then((response)=>showToast(response.data));
        console.log("Axios Response:", response.data);
      } catch (err) {
        console.log('Error fetching data:', err);
        
      }
  }
  

  const showToast=(data)=>{
 
      if(data.type==='success'){
        getData();
        ToastMessages.success(data.message);
      }else{
        ToastMessages.error(data.message);
      }
  
    }
    
 console.log(orderDetails)
  return (
    <div>
      <div className="Upper-details">
        <OrderCountCard result={result[0]} customCss={{ marginLeft: '2%' }}/>
        <OrderCountCard result={result[1]} customCss={{ marginLeft: '2%' }}/>
        <OrderCountCard result={result[2]} customCss={{ marginLeft: '2%' }}/>
        <OrderCountCard result={result[3]} customCss={{ marginLeft: '2%' }}/>
       
      </div>
      
      <div className="table-content">
        <div className="table-content-header">
          <button className="clickable-button" onClick={()=>handleByOrderType(type="Dine in")}>Dine In</button>
          <button className="clickable-button" onClick={()=>handleByOrderType(type="Delivery")}>Delivery</button>
          <button className="clickable-button" onClick={()=>handleByOrderType(type="Take away")}>Take away</button>
          <button className="accept-not-btn" onClick={()=>handleOrderVersion()}>{acceptOrder ? "New orders" : "Accept orders"}</button>
        </div>
        

        <div className="table-content-details">
                {orderDetails.length===0 ?(
                        <p className="No-order-msg">No orders today</p>
                    ):(
                        <table style={{marginInlineStart:"2%",marginTop:"2%"}}>
                            <thead>
                                <tr>
                                <th>Customer</th>
                                <th>Order Id</th>
                                <th>Order date</th>
                                <th>Order time</th>
                                <th>Order Type</th>
                                <th>Order status</th>
                                <th>Amount</th>
                                <th>Quantity</th>
                                <th></th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderDetails.map((o)=>(
                                    <tr key={o.orderId}>
                                        <td onClick={()=>handleRowClick(o.orderId,user_id)}>{o.name}</td>
                                        <td onClick={()=>handleRowClick(o.orderId,user_id)}>{o.orderId}</td>
                                        <td onClick={()=>handleRowClick(o.orderId,user_id)}>{o.date}</td>
                                        <td onClick={()=>handleRowClick(o.orderId,user_id)}>{o.time}</td>
                                        <td onClick={()=>handleRowClick(o.orderId,user_id)}>{o.orderType}</td>
                                        <td onClick={()=>handleRowClick(o.orderId,user_id)}> 
                                            {o.orderState===0 ? (
                                            //complete the prepare
                                               <p style={{color:'green'}}>New orders</p>
                                            ): o.orderState===1 ?(
                                               <p style={{color:'blue'}}>Accept orders</p>
                                            ):(
                                               " "
                                            )}
                                        </td>
                                        <td onClick={()=>handleRowClick(o.orderId,user_id)}>{"Rs:"}{o.amount}</td>
                                        <td onClick={()=>handleRowClick(o.orderId,user_id)}>{o.totalQuantity}</td>
                                        <td>
                                            {o.orderState===0 ? (
                                                <button className="order-accept" onClick={()=>handleAcceptPre(o.orderId,o.orderState)} >Accept</button>
                                            ):o.orderState===1 ?(
                                               <button className="order-accept" onClick={()=>handleAccept(o.orderId,o.orderState)}>Finalized</button>
                                            ):(
                                              " "
                                            )
                                            }
                                        </td>
                                        <td>
                                            {o.orderState===0 ? (
                                                <button className="order-reject" onClick={()=>handleReject(o.orderId)}>Reject</button>
                                            ):(
                                               " "
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
          
          
        </div>
        <div className="popup">
           <OrderMoreDetails trigger={popup} setTrigger={setPopup} result={moreOrderDetails}></OrderMoreDetails>
           <Toast duration={3000} />
        </div>
      </div>
    </div>
  );
}
