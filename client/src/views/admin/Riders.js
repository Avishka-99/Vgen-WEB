import React, { useState } from "react";
import TuneIcon from '@mui/icons-material/Tune';
import "../../styles/Admin/Riders.css";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

export default function Riders() {
  const bardata = [
    { name: 'Very Dissatisfied', value: 1 },
    { name: 'Dissatisfied', value: 3 },
    { name: 'Neutral', value: 10 },
    { name: 'Satisfied', value: 25 },
    { name: 'Very Satisfied', value: 40 },
  ];

  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const toggleFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  const [showFilterMenu2, setShowFilterMenu2] = useState(false);

  const toggleFilterMenu2 = () => {
    setShowFilterMenu2(!showFilterMenu2);
  };

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
              <div className="Ride-IconContainer"></div>
              <div className="Ride-nameText">Nayomi Karunaratne</div>
              <div className="Ride-subNameText">Product Manufacturer</div>
            </div>
          </div>
          <div className="Ride-subContainer">
          </div>
          <div className="Ride-bottom">
            <div className="Ride-bottomLeft">
              <div>
                <div className="Ride-subHeadingText">Customer Reviews</div>
                <div className="Ride-FilterButton2" onClick={toggleFilterMenu}>
                  Filter
                  {showFilterMenu && (
                    <div className="anl-filter-menu">
                      <div className="anl-filter-container">Today</div>
                      <div className="anl-filter-container">Last Month</div>
                      <div className="anl-filter-container">Last 5 Months</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="Ride-subContainer">
                <div className="Ride-bottomLeftContainer">
                <br/>
                <ResponsiveContainer width={700} height={200}>
                <BarChart data={bardata}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#183D3D" />
                </BarChart>
              </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Ride-right">
          <div className="Ride-SearchBar"></div>
            <br/>
            <div className="Ride-FilterButton1" onClick={toggleFilterMenu2}>
                  Filter
                  {showFilterMenu2 && (
                    <div className="anl-filter-menu">
                      <div className="anl-filter-container">Today</div>
                      <div className="anl-filter-container">Last Month</div>
                      <div className="anl-filter-container">Last 5 Months</div>
                    </div>
                  )}
                </div>
          <div className="Ride-RightContainer">
            {/* Add content for the right container here */}
          </div>
        </div>
      </div>
    </div>
  );
}
