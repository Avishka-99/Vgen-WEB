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
              <div className="Ride-nameText">Jeremiah Christopher</div>
              <div className="Ride-subNameText">Area : Colombo</div>
              <div className="Ride-Details">
                <div className="Ride-Name">
                  <span className="NameLabel">First Name : </span>
                  <span className="NameValue">Jeremiah</span>
                </div>
                <div className="Ride-Name">
                  <span className="NameLabel">Last Name : </span>
                  <span className="NameValue">Christopher</span>
                </div>
               <div className="Ride-Name">
                  <span className="NameLabel">Email : </span>
                  <span className="NameValue">jeremiahchris123@gmail.com</span>
               </div>
               <div className="Ride-Name">
                  <span className="NameLabel">Contact Number : </span>
                  <span className="NameValue">+94717654321</span>
               </div>
               <div className="Ride-Name">
                  <span className="NameLabel">Address : </span>
                  <span className="NameValue">No : 15, 2nd Lane, Narahenpita</span>
               </div>
               <div className="Ride-Name">
                  <span className="NameLabel">NIC : </span>
                  <span className="NameValue">987654321V</span>
               </div>
               <div className="Ride-Name">
                  <span className="NameLabel">Working Area : </span>
                  <span className="NameValue">Colombo</span>
               </div>
               <div className="Ride-Name">
                  <span className="NameLabel">ID : </span>
                  <span className="NameValue">Rider123</span>
               </div>
              </div>
            </div>
          </div>
          <div className="Ride-bottom">
            <div className="Ride-bottomLeft">
              <div>
                <div className="Ride-subHeadingText">Customer Reviews</div>
                <div className="Ride-FilterButton2" onClick={toggleFilterMenu}>
                  Filter
                  {showFilterMenu && (
                    <div className="Ride-Filter-menu">
                      <div className="Ride-Filter-container">Today</div>
                      <div className="Ride-Filter-container">Last Month</div>
                      <div className="Ride-Filter-container">Last 5 Months</div>
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
                  <Bar dataKey="value" fill="#772b8d" />
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
                    <div className="Ride-Filter-menu2">
                      <div className="Ride-Filter-container">Active Now</div>
                      <div className="Ride-Filter-container">Active 5 mins ago</div>
                      <div className="Ride-Filter-container">Active 30 mins ago</div>
                      <div className="Ride-Filter-container">Active 1 hour ago</div>
                      <div className="Ride-Filter-container">Recently Active</div>
                    </div>
                  )}
                </div>
          <div className="Ride-RightContainer">
            <div className="Ride-Activities">
                <div className="Ride-ActivityIconContainer"></div>
                <div className="Ride-ActivityText">Jeremiah Christopher</div>
            </div>
            <div className="Ride-Activities">
                <div className="Ride-ActivityIconContainer"></div>
                <div className="Ride-ActivityText">Jeremiah Christopher</div>
            </div>
            <div className="Ride-Activities">
                <div className="Ride-ActivityIconContainer "></div>
                <div className="Ride-ActivityText">Jeremiah Christopher</div>
            </div>
            <div className="Ride-Activities">
                <div className="Ride-ActivityIconContainer "></div>
                <div className="Ride-ActivityText">Jeremiah Christopher</div>
            </div>
            <div className="Ride-Activities">
                <div className="Ride-ActivityIconContainer "></div>
                <div className="Ride-ActivityText">Jeremiah Christopher</div>
            </div>
            <div className="Ride-Activities">
               <div className="Ride-ActivityIconContainer "></div>
               <div className="Ride-ActivityText">Jeremiah Christopher</div>
            </div>
            <div className="Ride-Activities">
                <div className="Ride-ActivityIconContainer"></div>
                <div className="Ride-ActivityText">Jeremiah Christopher</div>
            </div>
            <div className="Ride-Activities">
                <div className="Ride-ActivityIconContainer"></div>
                <div className="Ride-ActivityText">Jeremiah Christopher</div>
            </div>
            <div className="Ride-Activities">
                <div className="Ride-ActivityIconContainer "></div>
                <div className="Ride-ActivityText">Jeremiah Christopher</div>
            </div>
            <div className="Ride-Activities">
                <div className="Ride-ActivityIconContainer "></div>
                <div className="Ride-ActivityText">Jeremiah Christopher</div>
            </div>
            <div className="Ride-Activities">
                <div className="Ride-ActivityIconContainer "></div>
                <div className="Ride-ActivityText">Jeremiah Christopher</div>
            </div>
            <div className="Ride-Activities">
               <div className="Ride-ActivityIconContainer "></div>
               <div className="Ride-ActivityText">Jeremiah Christopher</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
