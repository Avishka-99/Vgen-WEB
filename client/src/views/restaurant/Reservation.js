import React, { useEffect, useState } from 'react';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import '../../styles/Restaurant/RestaurantOrders.css';
import { OrderCountCard } from './orderCountCard';
import * as ToastMessages from '../../components/ToastMessages';
import Toast from '../../components/Toast';

export default function Reservation() {
 const user_id=localStorage.getItem('userId');
  const [reservationDetails,SetReservationDetails]=useState([]);
  
    
   
   
    useEffect(() => {
   
      getReservationDetails();
      
    }, []);
    
    const   getReservationDetails= async ()=>{
      try {
        const res = await Axios.get(API_ENDPOINTS.getReservationDetails_URL, {
          params: {
            user_id: user_id,
          },
        });
        SetReservationDetails(res.data);
        
        
      } catch (err) {
        console.log('Error fetching data:', err);
        
      }
    };
   
	  
  const result = [
      { id: 1, title: 'New Reservation', count: 0 },
      { id: 2, title: 'Accept Reservation', count: 0 },
      { id: 3, title: 'Reject Reservation', count: 0 }
  ];
  if(reservationDetails.length>0){
    if (reservationDetails.result_2.length > 0 ) {
      reservationDetails.result_2.forEach((or) => {
            if (or.reservationState === 0) {
                // Find the existing object with id 1 and replace it
                const index = result.findIndex(item => item.id === 1);
                if (index !== -1) {
                    result[index] = { id: 1, title: 'New Reservation', count: or.count };
                }
            }
            if (or.reservationState === 1) {
                // Find the existing object with id 2 and replace it
                const index = result.findIndex(item => item.id === 2);
                if (index !== -1) {
                    result[index] = { id: 2, title: 'Accept Reservation', count: or.count };
                }
            }
            if (or.reservationState === -1) {
                // Find the existing object with id 3 and replace it
                const index = result.findIndex(item => item.id === 3);
                if (index !== -1) {
                    result[index] = { id: 3, title: 'Reject Reservation', count: or.count };
                }
            }
        });
    }
  }
  
   
 
    const acceptHandle =async (ReservationId) => {
      var newOrderState=1;
      
      try {
        const response= await Axios.post(API_ENDPOINTS.updateReservationState_URL,{
          reservation_id:ReservationId,
          reservation_state:newOrderState,
        }).then((response)=>showToast(response.data));;
        console.log("Axios Response:", response.data);
      } catch (err) {
        console.log('Error fetching data:', err);
        
      }
    }
    const rejectHandle = async (ReservationId) => {
      var newOrderState=-1;
      
      try {
        const response= await Axios.post(API_ENDPOINTS.updateReservationState_URL,{
          reservation_id:ReservationId,
          reservation_state:newOrderState,
        }).then((response)=>showToast(response.data));;
        console.log("Axios Response:", response.data);
      } catch (err) {
        console.log('Error fetching data:', err);
        
      }
   }

   const getAcceptReservation= async()=>{
    try {
      const res = await Axios.get(API_ENDPOINTS.getAcceptedReservationDetails_URL, {
        params: {
          user_id: user_id,
        },
      });
      SetReservationDetails(res.data);
      
      
    } catch (err) {
      console.log('Error fetching data:', err);
      
    }
   }
  
   const showToast=(data)=>{
 
    if(data.type==='success'){
      getReservationDetails();
      ToastMessages.success(data.message);
    }else{
      ToastMessages.error(data.message);
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
           <button className='accept-not-btn' style={{marginLeft:'75%'}} onClick={()=>getAcceptReservation()}>Accept reservation</button>
        </div>
        <div className="table-content-details">
          {reservationDetails.length==0?(
            <p>No orders</p>
          ):(
            <table style={{marginLeft : '2%'}}>
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Reservation Id</th>
                      <th>Reservation date</th>
                      <th>Reservation time</th>
                      <th>Reservation Type</th>
                      <th>Meal type</th>
                     
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  {reservationDetails.result_1.map((o) => (
                    <tr key={o.reservationId}  >
                      <td >{o.fullName}</td>
                      <td >{o.reservationId}</td>
                      <td > {o.date}</td>
                      <td >{o.time}</td>
                      <td >  
                          {o.reservationState===0 ? (
                             <p style={{color:'green'}}>new reservation</p>
                            ):o.reservationState===1 ? (
                              <p style={{color:'blue'}}>Accept reservation</p>
                            ):(
                              " "
                            )
                          }
                      </td>
                      <td >{o.timePeriod}</td>
                    
                      <td>
                          {o.reservationState===0 ? (
                             <button className='order-accept' onClick={()=>acceptHandle(o.ReservationId)}>Accept</button>
                            ):(
                              " "
                            )
                          }
                       </td>
                      <td>
                          {o.reservationState===0 ? (
                             <button className='order-reject'onClick={()=>rejectHandle(o.ReservationId)}>Reject</button>
                            ):(
                              " "
                            )
                          }
                      </td>
                    </tr>
                  ))}
                </tbody>

                  
          </table>

          )}
          
        </div>
        <Toast duration={3000} />
      </div>
    </div>
  );
}
