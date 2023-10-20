import React, { useState } from "react";
import TuneIcon from '@mui/icons-material/Tune';
import "../../styles/Admin/Riders.css";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

export default function Riders() {
  return (
    <div className="Ride-Container">
      <div className="Ride-top">
        <div className="Ride-topLeft">
          <div className="Ride-topLine">
            <div className="Ride-headingText">VGen Riders</div>
            <div className="Ride-notificationButton"></div>
          </div>
          <div>
            <div className="Ride-dateText">Friday 20 October 2023</div>
          </div>
          <div className="Ride-subContainer">
            <div className="Ride-topLeftContainer">
              <div className="Ride-bodyText">Contact</div>
            </div>
          </div>
          <div className="Ride-subContainer">
          </div>
          <div className="Ride-bottom">
            <div className="Ride-bottomLeft">
              <div>
                <div className="Ride-subHeadingText">Customer Reviews</div>
                <div className="Ride-FilterButton2">Filter</div>
              </div>
              <div className="Ride-subContainer">
                <div className="Ride-bottomLeftContainer">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Ride-right">
          <div className="Ride-SearchBar"></div>
            <br/>
            <div className="Ride-FilterButton1">Filter</div>
          <div className="Ride-RightContainer">
            {/* Add content for the right container here */}
          </div>
        </div>
      </div>
    </div>
  );
}
