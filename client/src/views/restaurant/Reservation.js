import React, { useEffect, useState } from 'react';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import '../../styles/RestaurantOrders.css';
import { OrderCountCard } from './orderCountCard';

export default function Reservation() {
 const user_id=localStorage.getItem('userId');
  const [reservationDetails,SetReservationDetails]=useState([]);
  
    
   
   
    useEffect(() => {
      async function getReservationDetails(){
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
      getReservationDetails();
      
    }, []);
    
	console.log(reservationDetails);
    //card details
    const result = [];

	if (!reservationDetails.result_1 || !reservationDetails.result_2) {
		return <p>Loading...</p>;
	  } else {
		reservationDetails.result_2.map((or) => {
		  if (or.reservationState === 0) {
			result.push({ id: 1, title: 'New Reservation', count: or.count });
		  } else if (!(or.reservationState === -1) && !(or.reservationState === 1)) {
			result.push({ id: 1, title: 'New Reservation', count: 0 });
		  }
		});
	  
		reservationDetails.result_2.map((or) => {
		  if (or.reservationState === 1) {
			result.push({ id: 2, title: 'Accept Reservation', count: or.count });
		  } else if (!(or.reservationState === 0) && !(or.reservationState === -1)) {
			result.push({ id: 2, title: 'Accept Reservation', count: 0 });
		  }
		});
	  
		reservationDetails.result_2.map((or) => {
		  if (or.reservationState === -1) {
			result.push({ id: 3, title: 'Reject Reservation', count: or.count });
		  } else if (!(or.reservationState === 0) && !(or.reservationState === 1)) {
			result.push({ id: 3, title: 'Reject Reservation', count: 0 });
		  }
		});
	  
		console.log(result);
	  }
	  
    
 
    const acceptHandle = (orderId) => () => {
        
    }
    const rejectHandle = (orderId) => () => {
      
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
                      <td >  {o.reservationState===0 ? (
                            //complete the prepare
                            <p style={{color:'green'}}>new reservation</p>
                          ): (
                            " "
                          )}
                      </td>
                      <td >{o.timePeriod}</td>
                    
                      <td><button className='order-accept' onClick={acceptHandle(o.orderId)}>Accept</button></td>
                      <td><button className='order-reject'onClick={rejectHandle(o.orderId)}>Reject</button></td>
                    </tr>
                  ))}
                </tbody>

                  
          </table>

          )}
          
        </div>
        
      </div>
    </div>
  );
}
