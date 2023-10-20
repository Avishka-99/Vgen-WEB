import React, { useState } from "react";
import TuneIcon from '@mui/icons-material/Tune';
import "../../styles/Admin/Analytics.css";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

export default function Analytics() {
  const data = [
    { name: 'Views', value: 550},
    { name: 'Followers', value: 300},
    { name: 'Reposts', value: 150},
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const expensesData = [
    { name: 'Vegan Products', value: 1000 },
    { name: 'Vegan Events', value: 500 },
    { name: 'Donations', value: 300 },
  ];

  const expensesColors = ['#dc143c', '#FFC300', '#FF5733'];

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
            <div className="anl-filterButton1">Filter</div>
          </div>
          <div className="anl-subContainer">
            <div className="anl-topLeftContainer">
              <div className="anl-bodyText">Overview of Latest Month</div>
              <div className="anl-summaryButton">Last Month Summary</div>
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
                <div className="anl-filterButton1">Filter</div>
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
            <div className="anl-summaryButton">Last Month Summary</div>
          </div>
          <div>
            <div className="anl-topRightContainer">
              <div className="anl-filterButton2">Filter</div>
              <div className='pie-chart-container'>
                <ResponsiveContainer width={450} height={450}>
                  <PieChart>
                    <Pie data={data} cx={210} cy={130} innerRadius={60} outerRadius={100} fill='#8884d8' paddingAngle={10} dataKey='value' label={{ fill: 'black', fontSize: 13 }} onClick={handlePieClick}>
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
            <div className="anl-summaryButton">Last Month Summary</div>
          </div>
          <div>
            <div className="anl-bottomRightContainer">
              <div className="anl-filterButton2">Filter</div>
              <div className='pie-chart-container'>
            <ResponsiveContainer width={450} height={450}>
              <PieChart>
                <Pie data={expensesData} cx={210} cy={130} innerRadius={60} outerRadius={100} fill='#8884d8' paddingAngle={10} dataKey='value' label={{ fill: 'black', fontSize: 13 }} onClick={handleExpensesPieClick}>
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
