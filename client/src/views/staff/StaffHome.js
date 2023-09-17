import React, { useState } from "react";
import "../../styles/staff/staffhome.css";

export default function StaffHome() {
  return (
    <div className="AdminContainer">
      <div class="top">
        <div class="top-left">
          <div class="topline">
            <div class="headingtext">VGen Dashboard</div>
            <div class="notification-btn"></div>
          </div>

          <div class="datetext">Tuesday 07 July 2023</div>

          <div class="subcontainer">
            <div class="cardcontainer">
              <div class="devider1">
                <div class="cardiconcontainer"></div>
              </div>
              <div class="devider2">
                <font class="counttext"> 07 </font>
                <br />
                Pending Verifications
              </div>
            </div>
            <div class="cardcontainer">
              <div class="devider1">
                <div class="cardiconcontainer2"></div>
              </div>
              <div class="devider2">
                <font class="counttext"> 07 </font>
                <br />
                Pending Verifications
              </div>
            </div>
            <div class="cardcontainer">
              <div class="devider1">
                <div class="cardiconcontainer3"></div>
              </div>
              <div class="devider2">
                <font class="counttext"> 07 </font>
                <br />
                Pending Verifications
              </div>
            </div>
          </div>
        </div>

        <div class="top-right">

          <div class="topline">
            <div class="subheadingtext">Most Ordered</div>
            <div class="filter-btn">Today</div>
          </div>

          <div class="top-right-container">hiiiiiiiii</div>

        </div>
      </div>

      <div class="bottom">
        <div class="bottom-left">
          <div class="midline">
            <div class="subheadingtext">Quick Access</div>
            <div class="filter-btn">Filter</div>
          </div>

          <div class="table-area">
            <table class="db-tbl">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Order ID</th>
                  <th>Order Type</th>
                  <th>Payment</th>
                  <th>Order Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="customer">
                    <div class="img-icon"></div>
                    Dewmini
                  </td>
                  <td>4754093</td>
                  <td>Take Away</td>
                  <td>Completed</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td class="customer">
                    <div class="img-icon"></div>
                    Daweendri
                  </td>
                  <td>4753056</td>
                  <td>Delivery</td>
                  <td>COD</td>
                  <td>Preparing</td>
                </tr>
                <tr>
                  <td class="customer">
                    <div class="img-icon"></div>
                    Avishka
                  </td>
                  <td>4754093</td>
                  <td>Delivery</td>
                  <td>COD</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td class="customer">
                    <div class="img-icon"></div>
                    Dewmini
                  </td>
                  <td>4754093</td>
                  <td>Take Away</td>
                  <td>Completed</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td class="customer">
                    <div class="img-icon"></div>
                    Dewmini
                  </td>
                  <td>4754093</td>
                  <td>Take Away</td>
                  <td>Completed</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td class="customer">
                    <div class="img-icon"></div>
                    Daweendri
                  </td>
                  <td>4753056</td>
                  <td>Delivery</td>
                  <td>COD</td>
                  <td>Preparing</td>
                </tr>
                <tr>
                  <td class="customer">
                    <div class="img-icon"></div>
                    Dewmini
                  </td>
                  <td>4754093</td>
                  <td>Take Away</td>
                  <td>Completed</td>
                  <td>Completed</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
        <div class="bottom-right">
        
          <div class="midline">
            <div class="subheadingtext">Customer Reviews</div>
            <div class="filter-btn">Today</div>
          </div>

          <div class="bottom-right-container">hiiiiiiiii</div>

        </div>
      </div>
    </div>
  );
}
