import React, {useEffect, useState} from 'react';
import {MostCount} from './MostCount';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import '../../styles/Restaurant/RestaurentHome.css';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import { PieChart } from 'react-minimal-pie-chart';
import { OrderCountCard } from './orderCountCard';
import PopupContainer from './PopupContainer'

export default function RestaurantHome() {
  const [popup,setPopup]=useState(false);
  const [orderCount,setOrderCount]=useState([]);
  const [orderType,setOrderType]=useState([]);
  const [orders, setOrders] = useState([]);
  const [filterOrder,setFilterOrder]=useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mostOrders, setMostOrders] = useState([]);
  const [mostOrdersL, setMostOrdersL] = useState([]);

  const user_id=localStorage.getItem('userId');
  //get order details in table view
  const getOrderDetails = async () => {
    try {
      const res = await Axios.get(API_ENDPOINTS.restaurantDetails_URL, {
        params: {
          user_id: user_id,
        },
      });
      
      setOrders(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log('Error fetching data:', err);
      setIsLoading(false);
    }
  };
  //
   //get order types details for pie chart
      
   const getOrderTypeDetails = async () => {
    try {
      const res = await Axios.get(API_ENDPOINTS.getOrderType_URL, {
        params: {
          user_id: user_id,
        },
      });
      
      setOrderType(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log('Error fetching data:', err);
      setIsLoading(false);
    }
  };
  //

  //get order types details for pie chart
      
  const getOrderCountDetails = async () => {
    try {
      const res = await Axios.get(API_ENDPOINTS.getOrderCountDetail_URL, {
        params: {
          user_id: user_id,
        },
      });
      
      setOrderCount(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log('Error fetching data:', err);
      setIsLoading(false);
    }
  };
  //

  //get Most order details with limit
  const getMostOrderDetailsWithLimit = async () => {
    try {
      const res = await Axios.get(API_ENDPOINTS.getMostOrderCountWithLimit_URL, {
        params: {
          user_id: user_id,
        },
      });
      
      setMostOrdersL(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log('Error fetching data:', err);
      setIsLoading(false);
    }
  };
  //

  //get Most order details without limit
  const getMostOrderDetailsWithOtLimit = async () => {
    try {
      const res = await Axios.get(API_ENDPOINTS.getMostOrderCountWithOutLimit_URL, {
        params: {
          user_id: user_id,
        },
      });
      setPopup(true)
      setMostOrders(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log('Error fetching data:', err);
      setIsLoading(false);
    }
  };
  //

    useEffect(() => {
        getOrderDetails();
        getOrderTypeDetails();
        getOrderCountDetails();
        getMostOrderDetailsWithLimit();
    },[])
   

	const predefinedColors = ['#E38627', '#C13C37', '#6A2135'];

	const pieChartData = orderType.map((item, index) => ({
		title: item.orderType,
		value: item.count,
		color: predefinedColors[index % predefinedColors.length],
	}));

    let revenue=Math.round((orderCount.total_amount)*0.9);
    let total_count=orderCount.total_count;
    let total_quantity=orderCount.total_quantity;
 
  
    const upperData = [
      { id: 1, title: 'Total Revenue',count:revenue, string:"RS: "},
      { id: 2, title: 'Total dish count',count:total_quantity},
      { id: 3, title: 'Total Customers',count:total_count},
    ];
     
  
   

  
    return (
      <div>

        <div className="Details">
          <div className='Details-left'>
            <div className="Upper-details-home">
              <OrderCountCard result={upperData[0]} customCss={{ marginLeft: '0%' ,height : '150px',width : '25%'}}/>
              <OrderCountCard result={upperData[1]} customCss={{ marginLeft: '15%',height : '150px',width : '25%'}}/>
              <OrderCountCard result={upperData[2]} customCss={{ marginLeft: '15%',height : '150px',width : '25%' }}/>
            </div>
            <div className="table-details">

              <div className="table-detail-header">
                  <p>Order summary</p>
                  
                  <button id='filter-order' onClick={()=>setFilterOrder(true)}>Filter order</button>

              </div>

              <div className="table-content-home">
              {isLoading ? (
                <p>Loading...</p>
              ) : (
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
                {orders.map((o) => (
                  <tr key={o.orderId}>
                    <td>{o.fullName}</td>
                    <td>{o.orderId}</td>
                    <td>{o.orderType}</td>
                    <td>{o.status===1 ? (
                      <p style={{color:'green'}}>complete</p>
                    ):(<p style={{color:'red'}}>pending</p>
                    )}</td>
                    <td> {o.orderState===2 ? (
                          //complete the prepare
                          <p style={{color:'green'}}>complete</p>
                        ):o.orderState===1 ? (
                          //order accept and preparing
                          <p style={{color:'orange'}}>preparing</p>
                        ): o.orderState===0 ? (
                          //new orders and pending to accept
                          <p style={{color:'blue'}}>pending</p>
                        ):(
                           //orderState=-1 mean reject order
                           <p style={{color:'red'}}>reject</p>
                        )}
                        
                        
                      
                    </td>
                  </tr>
                ))}
              </tbody>

                
              </table>
              )}
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

								<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} selectsStart startDate={startDate} endDate={endDate} placeholderText='Start Date' />
								<br />
								<DatePicker selected={endDate} onChange={(date) => setEndDate(date)} selectsEnd startDate={startDate} endDate={endDate} minDate={startDate} placeholderText='End Date' />
								<br />
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
                    {isLoading ?(
                      <p>Loading</p>
                    ):(
                      <>
                      {mostOrdersL.map((p)=>(
                        <MostCount key={p.orderId} productData={p}/>
                    ))}
                      <button className='viewMoreProducts'onClick={(getMostOrderDetailsWithOtLimit)} >view more</button>
                      </>
                    )}
                     <PopupContainer trigger={popup} setTrigger={setPopup} title={"Most order List"} data={mostOrders}></PopupContainer>
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
                    {isLoading ? (
                      <p>Loading...</p>
                    ) : (
                      <>
                         <PieChart 
                            data={pieChartData} 
                            lineWidth={50}
                        />
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {pieChartData.map((entry) => (
                              <div key={entry.title} style={{ display: 'flex', alignItems: 'center', margin: 'auto' }}>
                                <div style={{ width: '15px', height: '15px', backgroundColor: entry.color, marginRight: '5px' }} />
                                <span>{entry.title}</span>
                              </div>
                            ))}
                        </div>
                        
                      </>
                      
                    )}

                  </div>

              </div>
            </>
            




           )}
              

          </div>
        </div>
      </div>
    );
  
}
