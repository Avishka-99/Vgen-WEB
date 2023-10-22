import React, { useState } from "react";
import TuneIcon from '@mui/icons-material/Tune';
import "../../styles/Admin/Home.css";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

export default function AdminHome() {
  
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const toggleFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  const [showFilterMenu2, setShowFilterMenu2] = useState(false);

  const toggleFilterMenu2 = () => {
    setShowFilterMenu2(!showFilterMenu2);
  };

  const [showFilterMenu3, setShowFilterMenu3] = useState(false);

  const toggleFilterMenu3 = () => {
    setShowFilterMenu3(!showFilterMenu3);
  };
  return (
    <div className="Home-Container">
      <div className="Home-Top">
        <div className="Home-TopLeft">
          <div className="Home-TopLine">
            <div className="Home-HeadingText">VGen Orders</div>
            <div className="Home-NotificationButton"></div>
          </div>
          <div>
            <div className="Home-DateText">Sunday 22 October 2023</div>
          </div>
          <div className="Home-SubContainer">
		    <div className="Home-CardContainer">
              <div className="Home-FirstDivider">
                <div className="Home-CardIconContainer"></div>
                <div className="Home-CountText">Rs.150,000</div>
              </div>
              <div className="Home-SecondDivider">
                <br />
                <span className="Home-CountGoesUp"> +11.15% </span>
                <br />
                Total Orders
              </div>
            </div>
            <div className="Home-CardContainer">
              <div className="Home-FirstDivider">
                <div className="Home-CardIconContainer2"></div>
                <div className="Home-CountText">Rs.250,000</div>
              </div>
              <div className="Home-SecondDivider">
                <br />
                <span className="Home-CountGoesUp"> +11.15% </span>
                <br />
                Fulfilled Orders
              </div>
            </div>
            <div className="Home-CardContainer">
              <div className="Home-FirstDivider">
                <div className="Home-CardIconContainer3"></div>
                <div className="Home-CountText">Rs.45,000</div>
              </div>
              <div className="Home-SecondDivider">
                <br />
                <span className="Home-CountGoesDown"> -1.15% </span>
                <br />
                Cancelled Orders
              </div>
            </div>
          </div>
          <div className="Home-SubContainer">
          </div>
          <div className="Home-Bottom">
            <div className="Home-BottomLeft">
              <div className="Home-MidLine"></div>
              <div>
                <div className="Home-SubHeadingText">Recent Orders</div>
				<div className="Home-filterButton1" onClick={toggleFilterMenu}>
                  Filter
                  {showFilterMenu && (
                    <div className="Home-filter-menu">
                      <div className="Home-filter-container">Customer</div>
                      <div className="Home-filter-container">Order Type</div>
                      <div className="Home-filter-container">Payment</div>
                      <div className="Home-filter-container">Order Status</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="Home-SubContainer">
			  <div class="Home-tableArea">
			  <table class="Home-dbTable">
                <thead>
                  <tr>
                    <th>Customer ID</th>
                    <th>Order ID</th>
                    <th>Order Type</th>
                    <th>Payment</th>
                    <th>Order Status</th>
                 </tr>
                </thead>
                  <tbody>
                    <tr>
                      <td>Dewmini</td>
                      <td>101</td>
                      <td>Delivery</td>
                      <td>COD</td>
                      <td>Preparing</td>
                    </tr>
                    <tr>
                      <td>Janadi</td>
                      <td>103</td>
                      <td>Delivery</td>
                      <td>COD</td>
                      <td>Preparing</td>
                    </tr>
                    <tr>
                      <td>Tharindu</td>
                      <td>104</td>
                      <td>Delivery</td>
                      <td>COD</td>
                      <td>Preparing</td>
                    </tr>
                    <tr>
                      <td>Tharindu</td>
                      <td>104</td>
                      <td>Delivery</td>
                      <td>COD</td>
                      <td>Preparing</td>
                    </tr>
                    <tr>
                      <td>Tharindu</td>
                      <td>104</td>
                      <td>Delivery</td>
                      <td>COD</td>
                      <td>Preparing</td>
                    </tr>
					<tr>
                      <td>Tharindu</td>
                      <td>104</td>
                      <td>Delivery</td>
                      <td>COD</td>
                      <td>Preparing</td>
                    </tr>
					<tr>
                      <td>Tharindu</td>
                      <td>104</td>
                      <td>Delivery</td>
                      <td>COD</td>
                      <td>Preparing</td>
                    </tr>
					<tr>
                      <td>Tharindu</td>
                      <td>104</td>
                      <td>Delivery</td>
                      <td>COD</td>
                      <td>Preparing</td>
                    </tr>
					<tr>
                      <td>Tharindu</td>
                      <td>104</td>
                      <td>Delivery</td>
                      <td>COD</td>
                      <td>Preparing</td>
                    </tr><tr>
                      <td>Tharindu</td>
                      <td>104</td>
                      <td>Delivery</td>
                      <td>COD</td>
                      <td>Preparing</td>
                    </tr>
                  </tbody>
              </table>
			  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Home-Right">
          <div className="Home-SubHeadingText">Most Ordered</div>
		  <div className="Home-filterButton1" onClick={toggleFilterMenu2}>
                  Filter
                  {showFilterMenu2 && (
                    <div className="Home-filter-menu">
                      <div className="Home-filter-container">All</div>
                      <div className="Home-filter-container">Today</div>
                      <div className="Home-filter-container">Yesterday</div>
                      <div className="Home-filter-container">Last Week</div>
					  <div className="Home-filter-container">Last Month</div>
                    </div>
                  )}
          </div>
          <div>
            <div className="Home-topRightContainer">
            </div>
          </div>
		    <div className="Home-SubHeadingText">Customer Reviews</div>
            <div className="Home-filterButton1" onClick={toggleFilterMenu3}>
                  Filter
                  {showFilterMenu3 && (
                    <div className="Home-filter-menu">
					  <div className="Home-filter-container">All</div>
                      <div className="Home-filter-container">Today</div>
                      <div className="Home-filter-container">Yesterday</div>
                      <div className="Home-filter-container">Last Week</div>
					  <div className="Home-filter-container">Last Month</div>
                    </div>
                  )}
          </div>
          <div className="Home-SubContainer">
              <div className="Home-bottomRightContainer">
              </div>
		  </div>
        </div>
      </div>
    </div>
  );
}
