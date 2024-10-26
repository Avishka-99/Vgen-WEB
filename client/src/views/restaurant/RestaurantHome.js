import React, { useEffect, useState } from 'react';
import { MostCount } from './MostCount';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import '../../styles/Restaurant/RestaurentHome.css';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import { PieChart } from 'react-minimal-pie-chart';
import { OrderCountCard } from './orderCountCard';
import PopupContainer from './PopupContainer'
import moment from 'moment';

export default function RestaurantHome() {

  const [popup, setPopup] = useState(false);
  const [orderCount, setOrderCount] = useState([]);
  const [orderType, setOrderType] = useState([]);
  const [orders, setOrders] = useState([]);
  const [filterOrder, setFilterOrder] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mostOrders, setMostOrders] = useState([]);
  const [mostOrdersL, setMostOrdersL] = useState([]);
  const user_id = localStorage.getItem('userId');
  const [orderTypeName, setOrderTypeName] = useState('Delivery');
  const [paymentState, setPaymentState] = useState(0);
  const [orderState, setOrderSate] = useState(0);

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

    (async () => {
      try {
        const [res1, res2, res3, res4] = await Promise.all([
          Axios.get(API_ENDPOINTS.restaurantDetails_URL, {
            params: {
              user_id: user_id,
            },
          }),
          Axios.get(API_ENDPOINTS.getOrderCountDetail_URL, {
            params: {
              user_id: user_id,
            },
          }),
          Axios.get(API_ENDPOINTS.getMostOrderCountWithLimit_URL, {
            params: {
              user_id: user_id,
            },
          }),
          Axios.get(API_ENDPOINTS.getOrderType_URL, {
            params: {
              user_id: user_id,
            },
          }),
        ]);

        setOrders(res1.data);
        setOrderCount(res2.data);
        setMostOrdersL(res3.data);
        setOrderType(res4.data)
        setIsLoading(false);
      } catch (err) {
        console.log('Error fetching data:', err);
        setIsLoading(false);
      }
    })();

  }, [user_id]);


  const predefinedColors = ['#ececa3', '#b5e550', '#abc32f'];

  const pieChartData = orderType.map((item, index) => ({
    title: item.orderType,
    value: item.orderTypeCount,
    color: predefinedColors[index % predefinedColors.length],
  }));


  //assign a date and time
  const time = new Date();
  const dateOptions = { month: 'long', day: 'numeric' };
  const timeOptions = { hour: 'numeric', minute: 'numeric' };

  const [currentDate, setCurrentDate] = useState(time.toLocaleDateString(undefined, dateOptions));
  const [currentTime, setCurrentTime] = useState(time.toLocaleTimeString(undefined, timeOptions));

  const updateTime = () => {
    const newTime = new Date();
    const newCurrentDate = newTime.toLocaleDateString(undefined, dateOptions);
    const newCurrentTime = newTime.toLocaleTimeString(undefined, timeOptions);

    setCurrentDate(newCurrentDate);
    setCurrentTime(newCurrentTime);
  }

  setInterval(updateTime, 1000);
  //

  let revenue = 0;
  let total_count = 0;

  if (orderCount.length > 0) {
    revenue = Math.round((orderCount[0].totalAmount) * 0.9);
    total_count = orderCount[0].totalCount;
  }

  const upperData = [
    { id: 1, title: 'Today Revenue', count: revenue, string: "RS: " },
    { id: 2, title: 'Today Sales', count: total_count },
    { id: 3, title: currentDate, count: currentTime },
  ];

  const searchForChart = async (value) => {
    try {
      const res = await Axios.get(API_ENDPOINTS.getSearchForChart_URL, {
        params: {
          user_id: user_id,
          value: value
        },
      });
      setOrderType(res.data)
      setIsLoading(false);
    } catch (err) {
      console.log('Error fetching data:', err);
      setIsLoading(false);
    }
  }

  const searchForValue = async (value) => {
    try {
      const res = await Axios.get(API_ENDPOINTS.getSearchForValue_URL, {
        params: {
          user_id: user_id,
          value: value
        },
      });
      setMostOrdersL(res.data)
      setIsLoading(false);
    } catch (err) {
      console.log('Error fetching data:', err);
      setIsLoading(false);
    }
  }

  const orderDetailsSearch = async () => {
    try {
      const res = await Axios.get(API_ENDPOINTS.getSearchData_URL, {
        params: {
          user_id: user_id,
          orderType: orderTypeName,
          paymentState: paymentState,
          orderState: orderState,
          orderDate: moment(startDate).utc().format('YYYY-MM-DD')
        },
      });
      setOrders(res.data)
      setIsLoading(false);
    } catch (err) {
      console.log('Error fetching data:', err);
      setIsLoading(false);
    }
  }

  return (
    <div className='restaurant-background'>

      <div className="Details">
        <div className='Details-left'>
          <div className="Upper-details-home">
            <OrderCountCard result={upperData[0]} customCss={{ marginLeft: '0%', height: '150px', width: '25%' }} />
            <OrderCountCard result={upperData[1]} customCss={{ marginLeft: '15%', height: '150px', width: '25%' }} />
            <OrderCountCard result={upperData[2]} customCss={{ marginLeft: '15%', height: '150px', width: '25%' }} />
          </div>
          <div className="table-details">

            <div className="table-detail-header">
              <p>Order summary</p>

              <button id='filter-order' onClick={() => setFilterOrder(true)}>Filter order</button>

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
                        <td>{o.customerName}</td>
                        <td>{o.orderId}</td>
                        <td>{o.orderType}</td>
                        <td>{o.status === 1 ? (
                          <p style={{ color: 'green' }}>complete</p>
                        ) : (<p style={{ color: 'red' }}>pending</p>
                        )}</td>
                        <td> {o.orderState === 2 ? (
                          //complete the prepare
                          <p style={{ color: 'green' }}>complete</p>
                        ) : o.orderState === 1 ? (
                          //order accept and preparing
                          <p style={{ color: 'orange' }}>preparing</p>
                        ) : o.orderState === 0 ? (
                          //new orders and pending to accept
                          <p style={{ color: 'blue' }}>pending</p>
                        ) : (
                          //orderState=-1 mean reject order
                          <p style={{ color: 'red' }}>reject</p>
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
                <button className='filter-order-back' onClick={() => setFilterOrder(false)}>Back</button><br />
                <p>Order Type </p>
                <select name="" id="order-type" onChange={(e) => setOrderTypeName(e.target.value)}>
                  <option value="Dine in">Dine In</option>
                  <option value="Take away">Take away</option>
                  <option value="Delivery">Deliver</option>
                </select><br />
                <p>Payment state </p>
                <select name="" id="payment-status" onChange={(e) => setPaymentState(e.target.value)}>
                  <option value="1">Complete</option>
                  <option value="0">Pending</option>
                </select><br />
                <p>Order state </p>
                <select name="" id="order-status" onChange={(e) => setOrderSate(e.target.value)}>
                  <option value="2">Complete</option>
                  <option value="1">Pending</option>
                  <option value="0">Preparing</option>
                </select><br />
                <p>Order place date</p>

                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} selectsStart startDate={startDate} placeholderText='Order Place Date' />
                {/* <br />
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} selectsEnd startDate={startDate} endDate={endDate} minDate={startDate} placeholderText='End Date' />
                <br /> */}
                <button id='search-order' onClick={() => orderDetailsSearch()}>Search Order</button>
              </div>


            </>

          ) : (

            <>
              <div className="most-ordered">
                <div className="most-ordered-header">
                  <p>Most ordered </p>
                  <select name="" id="" onChange={(e) => searchForValue(e.target.value)}>
                    <option value="1">Today</option>
                    <option value="2">Last 7 days</option>
                    <option value="3">Last 14 days</option>
                    <option value="4">last 30 days</option>
                    <option value="5">All the time</option>
                  </select>
                </div>
                <div className="most-ordered-content">
                  {isLoading ? (
                    <p>Loading</p>
                  ) : (
                    <>
                      {mostOrdersL.map((p) => (
                        <MostCount key={p.orderId} productData={p} />
                      ))}
                      <button className='viewMoreProducts' onClick={(getMostOrderDetailsWithOtLimit)} >view more</button>
                    </>
                  )}
                  <PopupContainer trigger={popup} setTrigger={setPopup} title={"Most order List"} data={mostOrders}></PopupContainer>
                </div>

              </div>
              <div className="barChart">
                <div className="barChart-header">
                  <p>Most type of orders </p>
                  <select name="" id="" onChange={(e) => searchForChart(e.target.value)}>
                    <option value="1">Today</option>
                    <option value="2">Last 7 days</option>
                    <option value="3">Last 14 days</option>
                    <option value="4">last 30 days</option>
                    <option value="5">All the time</option>
                  </select>
                </div>
                <div className="barChart-content">
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <>
                      <PieChart
                        data={pieChartData}
                        lineWidth={40}
                        style={{ width: '60%', height: '60%', marginLeft: '20%', marginTop: '10%' }}
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
