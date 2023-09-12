import React, { useState } from 'react';
import '../../styles/staff/staffhome.css';

export default function StaffHome() {
  return (
    <div className='AdminContainer'>

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
  );
}