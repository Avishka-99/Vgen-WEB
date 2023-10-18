import React from 'react'
import "../../styles/staff/staffhome.css";
import "../../styles/staff/staffpayments.css";
import "../../styles/staff/staffcomplaints.css";

export default function Complains() {
  return (
    <div className="AdminContainer">
      <div class="top">
        <div class="top-left">
          <div class="topline">
            <div class="headingtext">VGen User Complaints</div>
            <div class="notification-btn"></div>
          </div>

          <div class="datetext">Tuesday 07 July 2023</div>

          {/* <div class="QAtitle">Quick Access</div> */}

          <div class="complaintssubcontainer">
            <div class="complaintscardcontainer">
              <div class="com-dash-icon com-dash-icon1">
              </div>
              <div class="com-crdtitle">
                <div class="line1">
                  Pending Complaints
                </div>
                <div class="line2">
                  07
                </div>
              </div>
            </div>
            <div class="complaintscardcontainer">
              <div class="com-dash-icon com-dash-icon2">
              </div>
              <div class="com-crdtitle">
                <div class="line1">
                  Resolved Complaints
                </div>
                <div class="line2">
                  02
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="top-right">
          <div class="topline">
            <div class="subheadingtext">[Title Here]</div>
            <div class="filter-btn">Today</div>
          </div>

          <div class="top-right-container">[Content Here]</div>
        </div>
      </div>

      <div class="bottom">
        <div class="bottom-left">
          <div class="midline">
            <div class="subheadingtext">Recent Complaints</div>
            <div class="filter-btn">Filter</div>
          </div>

          <div class="table-area">
            <table class="db-tbl">
              <thead>
                <tr>
                  <th>Table Coloumn Title</th>
                  <th>Table Coloumn Title</th>
                  <th>Table Coloumn Title</th>
                  <th>Table Coloumn Title</th>
                  <th>Table Coloumn Title</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data 1</td>
                  <td>Data 2</td>
                  <td class="customer">
                    <div class="img-icon"></div>
                    Data 3
                  </td>
                  <td>Data 4</td>
                  <td>Data 5</td>
                </tr>
                <tr>
                  <td>Data 1</td>
                  <td>Data 2</td>
                  <td class="customer">
                    <div class="img-icon"></div>
                    Data 3
                  </td>
                  <td>Data 4</td>
                  <td>Data 5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="bottom-right">
          <div class="midline">
            <div class="subheadingtext">[Title Here]</div>
            <div class="filter-btn">Today</div>
          </div>

          <div class="bottom-right-container">[Content Here]</div>
        </div>
      </div>
    </div>
  )
}
