import React, { useState } from "react";
import TuneIcon from '@mui/icons-material/Tune';
import "../../styles/Admin/Analytics.css";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

export default function Analytics() {
  const bardata = [
    { name: 'Total Sales', value: 150000 },
    { name: 'Total Revenue', value: 250000 },
  ];

  const data = [
    { name: 'Views', value: 550 },
    { name: 'Followers', value: 300 },
    { name: 'Reposts', value: 150 },
  ];

  const COLORS = ['#2c8bbc', '#14a4cc', '#4c6cb3'];

  const expensesData = [
    { name: 'Vegan Products', value: 1000 },
    { name: 'Vegan Events', value: 500 },
    { name: 'Donations', value: 300 },
  ];

  const expensesColors = ['#5f5fa9', '#3e7cb7', '#3e7cb7'];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip">
          {data.name}: {data.value}
        </div>
      );
    }
    return null;
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeExpensesIndex, setActiveExpensesIndex] = useState(null);

  const handlePieClick = (data, index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleExpensesPieClick = (data, index) => {
    setActiveExpensesIndex(activeExpensesIndex === index ? null : index);
  };

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

  const [showFilterMenu4, setShowFilterMenu4] = useState(false);

  const toggleFilterMenu4 = () => {
    setShowFilterMenu4(!showFilterMenu4);
  };

  return (
    <div className="Analytics-Container">
      <div className="anl-top">
        <div className="anl-topLeft">
          <div className="anl-topLine">
            <div className="anl-headingText">VGen Analytics</div>
            <div className="anl-notificationButton"></div>
          </div>
          <div>
            <div className="anl-dateText">Tuesday 07 July 2023</div>
            <div className="anl-filterButton1" onClick={toggleFilterMenu}>
              Filter
              {showFilterMenu && (
                <div className="anl-filter-menu">
                  <div className="anl-filter-container">Daily</div>
                  <div className="anl-filter-container">Weekly</div>
                  <div className="anl-filter-container">Monthly</div>
                  <div className="anl-filter-container">Yearly</div>
                </div>
              )}
            </div>
          </div>
          <div className="anl-subContainer">
            <div className="anl-topLeftContainer">
              <div className="anl-bodyText">Overview of Latest Month</div>
              <div className="anl-summary">Last Month Summary</div>
              <ResponsiveContainer width={700} height={200}>
                <BarChart data={bardata}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#5f5fa9" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="anl-subContainer">
            <div className="anl-cardContainer">
              <div className="anl-firstDivider">
                <div className="anl-cardIconContainer"></div>
                <div className="anl-countText">Rs.150,000</div>
              </div>
              <div className="anl-secondDivider">
                <br />
                <span className="anl-countGoesUp"> +11.15% </span>
                <br />
                Total Sales
              </div>
            </div>
            <div className="anl-cardContainer">
              <div className="anl-firstDivider">
                <div className="anl-cardIconContainer2"></div>
                <div className="anl-countText">Rs.250,000</div>
              </div>
              <div className="anl-secondDivider">
                <br />
                <span className="anl-countGoesUp"> +11.15% </span>
                <br />
                Total Revenue
              </div>
            </div>
            <div className="anl-cardContainer">
              <div className="anl-firstDivider">
                <div className="anl-cardIconContainer3"></div>
                <div className="anl-countText">Rs.45,000</div>
              </div>
              <div className="anl-secondDivider">
                <br />
                <span className="anl-countGoesDown"> -1.15% </span>
                <br />
                Total Expenses
              </div>
            </div>
          </div>
          <div className="anl-bottom">
            <div className="anl-bottomLeft">
              <div className="anl-midLine"></div>
              <div>
                <div className="anl-subHeadingText">Recent Activities</div>
                <div className="anl-filterButton1" onClick={toggleFilterMenu2}>
                  Filter
                  {showFilterMenu2 && (
                    <div className="anl-filter-menu">
                      <div className="anl-filter-container">Daily</div>
                      <div className="anl-filter-container">Weekly</div>
                      <div className="anl-filter-container">Monthly</div>
                      <div className="anl-filter-container">Yearly</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="anl-subContainer">
                <div className="anl-bottomLeftContainer">
                  <div className="anl-activities-row">
                    <div className="anl-activities">
                      <div className="anl-activityIconContainer"></div>
                      <div className="anl-activityText">Vegen Cooking Workshop</div>
                    </div>
                    <div className="anl-activities">
                      <div className="anl-activityIconContainer"></div>
                      <div className="anl-activityText">Vegen Cooking Workshop</div>
                    </div>
                    <div className="anl-activities">
                      <div className="anl-activityIconContainer"></div>
                      <div className="anl-activityText">Vegen Cooking Workshop</div>
                    </div>
                    <div className="anl-activities">
                      <div className="anl-activityIconContainer"></div>
                      <div className="anl-activityText">Vegen Cooking Workshop</div>
                    </div>
                    <div className="anl-activities">
                      <div className="anl-activityIconContainer"></div>
                      <div className="anl-activityText">Vegen Cooking Workshop</div>
                    </div>
                    <div className="anl-activities">
                      <div className="anl-activityIconContainer"></div>
                      <div className="anl-activityText">Vegen Cooking Workshop</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="anl-right">
          <div className="anl-subHeadingText">
            Web Surfers
            <div className="anl-summary">Last Month Summary</div>
          </div>
          <div>
            <div className="anl-topRightContainer">
              <div className="anl-filterButton2" onClick={toggleFilterMenu3}>
                Filter
                {showFilterMenu3 && (
                  <div className="anl-filter-menu">
                    <div className="anl-filter-container">Daily</div>
                    <div className="anl-filter-container">Weekly</div>
                    <div className="anl-filter-container">Monthly</div>
                    <div className="anl-filter-container">Yearly</div>
                  </div>
                )}
              </div>
              <div className='anl-pie-chart-container'>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={data}  innerRadius={60} outerRadius={100} fill='#ccc' paddingAngle={20} dataKey='value' label={{ fill: 'black', fontSize: 13 }} onClick={handlePieClick}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
                {/* {activeIndex !== null && (
                  <div className="selected-label">
                    Selected: {data[activeIndex].name}
                  </div>
                )} */}
              </div>
            </div>
          </div>
          <div className="anl-subHeadingText">
            Expenses
            <div className="anl-summary">Last Month Summary</div>
          </div>
          <div>
            <div className="anl-bottomRightContainer">
              <div className="anl-filterButton2" onClick={toggleFilterMenu4}>
                Filter
                {showFilterMenu4 && (
                  <div className="anl-filter-menu">
                    <div className="anl-filter-container">Daily</div>
                    <div className="anl-filter-container">Weekly</div>
                    <div className="anl-filter-container">Monthly</div>
                    <div className="anl-filter-container">Yearly</div>
                  </div>
                )}
              </div>
              <div className='anl-pie-chart-container'>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={expensesData} innerRadius={60} outerRadius={100} fill='#ccc' paddingAngle={20} dataKey='value' label={{ fill: 'black', fontSize: 13 }} onClick={handleExpensesPieClick}>
                      {expensesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={expensesColors[index % expensesColors.length]} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
                {/* {activeExpensesIndex !== null && (
                  <div className="selected-label">
                    Selected: {expensesData[activeExpensesIndex].name}
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
