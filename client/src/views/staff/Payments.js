import React from 'react'
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
              <div class="icon">
                <div class="restuaranticon"></div>
              </div>
              <div class="crdtitle">
                Restaurant <br/> Payments
              </div>
            </div>
            <div class="paymentcardcontainer">
              <div class="crdtitle">
                Delivery <br/> Payments
              </div>
              </div>
            <div class="paymentcardcontainer">
              <div class="crdtitle">
                Manufacturer <br/> Payments
              </div>
            </div>
            <div class="paymentcardcontainer">
              <div class="crdtitle">
                Donation <br /> Details
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
