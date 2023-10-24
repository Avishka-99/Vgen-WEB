import React, { useState } from "react";
import "../../styles/staff/staffhome.css";
import FontAwesomeIcon from '../../components/FontAwesome';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
    Vegans: 50,
    Restaurants: 20,
    "Delivery Persons": 31,  
    Manufacturers: 10,
  },
  {
    name: 'Tuesday',
    Vegans: 80,
    Restaurants: 40,
    "Delivery Persons": 42,
    Manufacturers: 20,
  },
  {
    name: 'Wednesday',
    Vegans: 70,
    Restaurants: 30,
    "Delivery Persons": 38,
    Manufacturers: 15,
  },
  {
    name: 'Thursday',
    Vegans: 90,
    Restaurants: 50,
    "Delivery Persons": 26,
    Manufacturers: 30,
  },
  {
    name: 'Friday',
    Vegans: 60,
    Restaurants: 70,
    "Delivery Persons": 45,
    Manufacturers: 40,
  },
  {
    name: 'Saturday',
    Vegans: 100,
    Restaurants: 38,
    "Delivery Persons": 40,
    Manufacturers: 40,
  },
  {
    name: 'Sunday',
    Vegans: 120,
    Restaurants: 40,
    "Delivery Persons": 50,
    Manufacturers: 55,
  },
];

export default function StaffHome() {
  return (
    <div className="AdminContainer">
      <div class="top">
        <div class="top-left">
          <div class="topline">
            <div class="headingtext">VGen Dashboard</div>
            <div class="notification-btn">
              <FontAwesomeIcon icon="fa-solid fa-bell" />
            </div>
          </div>

          <div class="datetext">Tuesday 07 July 2023</div>

          <div class="subcontainer">
            <div class="cardcontainer">
              <div class="devider1">
                <div class="cardiconcontainer"></div>
              </div>
              <div class="devider2">
                <font class="counttext"> 12 </font>
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
                Pending Payments
              </div>
            </div>
            <div class="cardcontainer">
              <div class="devider1">
                <div class="cardiconcontainer3"></div>
              </div>
              <div class="devider2">
                <font class="counttext"> 25 </font>
                <br />
                Pending Complaints
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
            <div class="subheadingtext">System User Trends</div>
            <div class="filter-btn">This Week</div>
          </div>

          <div class="chart-area">
          <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={800}
                height={350}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }}/>
                <YAxis tick={{ fontSize: 12 }}/>
                <Tooltip contentStyle={{ fontSize: 12 }}/>
                <Legend iconSize={12} iconType="circle" wrapperStyle={{ fontSize: 12 }} />
                <Line type="monotone" dataKey="Vegans" stroke="#00c49f" strokeWidth={2} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Delivery Persons" stroke="#8c85dc" strokeWidth={2} />
                <Line type="monotone" dataKey="Restaurants" stroke="#ff8042"  strokeWidth={2} />   
                <Line type="monotone" dataKey="Manufacturers" stroke="#0088fe" strokeWidth={2} />    
              </LineChart>
          </ResponsiveContainer>
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
