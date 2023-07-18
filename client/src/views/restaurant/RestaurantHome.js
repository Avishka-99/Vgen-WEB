import React from 'react'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import HailIcon from '@mui/icons-material/Hail';
import DashboardDetails from './DashboardDetails';
import '../../styles/RestaurentHome.css'



export default function RestaurantHome() {
  
    const detailsData1 = [
      { id: 1, icon: <MonetizationOnIcon /> },
      { id: 2, name: 'Rs :', value: '3 000' },
      { id: 3, name: 'Total Revenue'},
    ];
    const detailsData2 = [
      { id: 1, icon: <DinnerDiningIcon /> },
      { id: 2, value: '50' },
      { id: 3, name: 'Total Dish Ordered'},
    ];
    const detailsData3 = [
      { id: 1, icon: <HailIcon /> },
      { id: 2, value: '30' },
      { id: 3, name: 'Total Customers'},
    ];
  
    return (
      <div>
        <div className="Upper-details">
          <DashboardDetails data={detailsData1} />
          <DashboardDetails data={detailsData2} />
          <DashboardDetails data={detailsData3} />
        </div>
        
      </div>
    );
  
}
