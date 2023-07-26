import React, { useEffect, useState } from 'react'
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
// import HailIcon from '@mui/icons-material/Hail';

import DashboardDetails from './DashboardDetails';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

import '../../styles/RestaurentHome.css'

import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';



export default function RestaurantHome() {


  const user_id=localStorage.getItem('userId');
  console.log(user_id)
  const [orders,setOrders]=useState([]);
  const [filterOrder,setFilterOrder]=useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState('08:00'); // Set initial start time
  const [endTime, setEndTime] = useState('18:00'); // Set initial end time
  
  const getOrderDetails=async ()=>{
    try{
      const res=await Axios.get(API_ENDPOINTS.restaurantDetails_URL,{
        params: {
          user_id: user_id,
        },
      });
      console.log(res.data);
      setOrders(res.data);
    }catch(err){
      console.log('Error fetching data:', err);
    }
  };

  useEffect(() => {
    getOrderDetails();
  },[])
  
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
                  <button id='filter-order' onClick={()=>setFilterOrder(true)}>Filter order</button>

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
           {filterOrder ? (
            <>
              <div className="filter-order">
                <button id='filter-order' onClick={()=>setFilterOrder(false)}>Back</button><br />
                  <p>Order Type </p>
                  <select name="" id="order-type">
                    <option value="dinIn">Dine In</option>
                    <option value="tackAway">Take away</option>
                    <option value="deliver">Deliver</option>
                  </select><br />
                  <p>Payment state </p>
                  <select name="" id="payment-status">
                    <option value="complete">Complete</option>
                    <option value="pending">Pending</option>
                  </select><br />
                  <p>Order state </p>
                  <select name="" id="order-status">
                    <option value="complete">Complete</option>
                    <option value="pending">Pending</option>
                    <option value="preparing">Preparing</option>
                  </select><br />
                  <p>Order place date</p>

                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Start Date"
                  /><br/>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="End Date"
                  /><br/>
                  {/* <p>Order place time</p>
                  <TimePicker
                    value={startTime}
                    onChange={setStartTime}
                    disableClock={false}
                  />
                  <TimePicker
                    value={endTime}
                    onChange={setEndTime}
                    disableClock={false}
                  />
                  <br /> */}
                  <button id='search-order'>Search Order</button>
              </div>
                

            </>
               
           ) :(

            <>
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
            </>
            




           )}
              

          </div>
        </div>
      </div>
    );
  
}
