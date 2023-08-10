import React,{useState} from 'react'

import CloseIcon from '@mui/icons-material/Close';
import '../../styles/RestaurantOrders.css'



const OrderMoreDetails = (props) => {
    
    return props.trigger ? ( 
      <div className="more-details-popup">
        <div className="more-details-popup-inner">
        <button className='Close-Btn' onClick={() => props.setTrigger(false)}><CloseIcon/></button>
        {props.children}
        <h2>More details of order</h2>
           
        
                  
      </div>

    </div>
      
        
        
       
     ): null;
}
 
export default OrderMoreDetails;