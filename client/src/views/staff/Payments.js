import React from "react";
import "../../styles/staff/staffhome.css";
import "../../styles/staff/staffpayments.css";

export default function Payments() {
  return (
    <div className="AdminContainer">
      <div class="top">
        <div class="top-left">
          <div class="topline">
            <div class="headingtext">VGen Payments</div>
            <div class="notification-btn"></div>
          </div>

          <div class="datetext">Tuesday 07 July 2023</div>

          <div class="QAtitle">Quick Access</div>

          <div class="paymentsubcontainer">
            <div class="paymentcardcontainer">
              <div class="pay-dash-icon pay-dash-icon1">
                <div class="restuaranticon"></div>
              </div>
              <div class="crdtitle">
                Restaurant <br /> Payments
              </div>
            </div>
            <div class="paymentcardcontainer">
              <div class="pay-dash-icon pay-dash-icon2">
                <div class="restuaranticon"></div>
              </div>
              <div class="crdtitle">
                Delivery <br /> Payments
              </div>
            </div>
            <div class="paymentcardcontainer">
              <div class="pay-dash-icon pay-dash-icon3">
                <div class="restuaranticon"></div>
              </div>
              <div class="crdtitle">
                Manufacturer <br /> Payments
              </div>
            </div>
            <div class="paymentcardcontainer">
              <div class="pay-dash-icon pay-dash-icon4">
                <div class="restuaranticon"></div>
              </div>
              <div class="crdtitle">
                Donation <br /> Details
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
            <div class="subheadingtext">Recent Transactions</div>
            <div class="filter-btn">Filter</div>
          </div>

          <div class="table-area">
            <table class="db-tbl">
              <thead>
                <tr>
                  <th style={{width: '130px'}}>Transaction ID</th>
                  <th style={{width: '180px'}}>Transaction Type</th>
                  <th style={{width: '230px'}}>Recipient</th>
                  <th style={{width: '100px'}}>Amount</th>
                  <th style={{width: '160px'}}>Transaction Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#4754093</td>
                  <td>Manufacturer Payment</td>
                  <td class="customer">
                    <div class="img-icon"></div>
                    ALP Manufacturers
                  </td>
                  <td>Rs. 2658.00</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>#3417950</td>
                  <td>Delivery Payment</td>
                  <td class="customer">
                    <div class="img-icon"></div>
                    Avishka Fernando
                  </td>
                  <td>Rs. 725.00</td>
                  <td>Pending</td>
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
  );
}
