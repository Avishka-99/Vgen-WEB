import React from 'react';
import '../../styles/DashboardDetails.css'

const DashboardDetails = ({ data }) => {
  return (
    <div className='Dashboard-details'>
      
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <span>{item.icon}</span>
            <span>{item.name}</span>
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardDetails;
