import React from 'react'
import DashboardDetails from './DashboardDetails';

 export default function OrdersView(){
   const detailsData1 = [
      // { id: 1, icon: <MonetizationOnIcon /> },
      { id: 2,  value: '3' },
      { id: 3, name: 'New Orders'},
    ];
    const detailsData2 = [
      // { id: 1, icon: <DinnerDiningIcon /> },
      { id: 2, value: '5' },
      { id: 3, name: 'Processing Orders'},
    ];
    const detailsData3 = [
      // { id: 1, icon: <HailIcon /> },
      { id: 2, value: '1' },
      { id: 3, name: 'Orders to be Deliver'},
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