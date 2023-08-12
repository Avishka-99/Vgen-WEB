import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../../styles/RestaurantOrders.css';
import {UserCard} from './UserCard';
import {ProductDetails} from './ProductDetails';

const OrderMoreDetails = (props) => {
    console.log(props.result);
    return props.trigger ? ( 
      <div className="more-details-popup">
        <div className="more-details-popup-inner">
        <button className='Close-Btn' onClick={() => props.setTrigger(false)}><CloseIcon/></button>
        <h2>More details of order {props.result.result_4[0].orderId}</h2>
        <div className="inner-left">
          <h3>Customer</h3>
          <UserCard  userData={props.result.result_4[0]} /></div>
        <div className="inner-Right">
            <h3>Order list</h3>
            {props.result.result_3.map((p)=>(
                <ProductDetails key={p.orderId} productData={p}/>
            ))}
        </div>

        

        
         
        
                  
      </div>

    </div>
      
        
        
       
     ): null;
}
 
export default OrderMoreDetails;