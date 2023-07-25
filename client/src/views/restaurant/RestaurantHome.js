import React, { useEffect, useState } from 'react'
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
// import HailIcon from '@mui/icons-material/Hail';
import DashboardDetails from './DashboardDetails';
import '../../styles/RestaurentHome.css'

import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';



export default function RestaurantHome() {


  const user_id=localStorage.getItem('userId');
  console.log(user_id)
  const [orders,setOrders]=useState([]);

  useEffect(() => {
    Axios.get(API_ENDPOINTS.restaurentDetails_URL,{
      user_id:user_id
    }).then((response)=>{
      setOrders(response.data.orders)
    })

  })
  
    const detailsData1 = [
      // { id: 1, icon: <MonetizationOnIcon /> },
      { id: 2, name: 'Rs :', value: '3 000' },
      { id: 3, name: 'Total Revenue'},
    ];
    const detailsData2 = [
      // { id: 1, icon: <DinnerDiningIcon /> },
      { id: 2, value: '50' },
      { id: 3, name: 'Total Dish Ordered'},
    ];
    const detailsData3 = [
      // { id: 1, icon: <HailIcon /> },
      { id: 2, value: '30' },
      { id: 3, name: 'Total Customers'},
    ];
  


  
    return (
      <div>
        <div className="Details">
          <div className='Details-left'>
            <div className="Upper-details">
              <DashboardDetails data={detailsData1} />
              <DashboardDetails data={detailsData2} />
              <DashboardDetails data={detailsData3} />
            </div>
            <div className="table-details">

              <div className="table-detail-header">
                  <p>Order summary</p>
                  <button id='filter-order'>Filter order</button>

              </div>

              <div className="table-content">
                <table>
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Order Id</th>
                      <th>Order Type</th>
                      <th>Payment status</th>
                      <th>Order status</th>
                    </tr>
                  </thead>
                  <tbody>
                  {/* {orders.map(o => (
                    <tr key={o.orderId}>
                      <td>o.customerName</td>
                      <td>o.orderId</td>
                      <td>o.orderType</td>
                      <td>o.paymentStatus</td>
                      <td>o.orderStatus</td>
                    </tr>
                  ))}  */}
                     <tr >
                      <td>Nirupana ganganath</td>
                      <td>1</td>
                      <td>delivery</td>
                      <td>pending</td>
                      <td>complete</td>
                    </tr>
                    <tr >
                      <td>Nirupana ganganath</td>
                      <td>1</td>
                      <td>delivery</td>
                      <td>pending</td>
                      <td>complete</td>
                    </tr>
                    <tr >
                      <td>Nirupana ganganath</td>
                      <td>1</td>
                      <td>delivery</td>
                      <td>pending</td>
                      <td>complete</td>
                    </tr>
                  
                  </tbody>
                  
                </table>

              </div>
              
              
            </div>
            
          </div>
          <div className="Details-right">
            <div className="most-ordered">
              <div className="most-ordered-header">
                 <p>Most ordered </p>
                 <select name="" id="">
                    <option value="today">Today</option>
                    <option value="today">Last 7 days</option>
                    <option value="today">Last 14 days</option>
                    <option value="today">last 30 days</option>
                    <option value="today">All the time</option>
                 </select>
              </div>
              <div className="most-ordered-content">

              </div>
                
            </div>
            <div className="barChart">
              <div className="barChart-header">
                  <p>Most type of orders </p>
                  <select name="" id="">
                      <option value="today">Today</option>
                      <option value="today">Last 7 days</option>
                      <option value="today">Last 14 days</option>
                      <option value="today">last 30 days</option>
                      <option value="today">All the time</option>
                  </select>
                </div>
                <div className="barChart-content">

                </div>

            </div>
              

          </div>
        </div>
      </div>
    );
  
}
