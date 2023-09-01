import React, { useEffect, useState } from "react";
import '../../styles/manufacture/manufactureHome.css'
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';

const ManufactureHome = () => {
    const [filter,setFilter]=useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const user_id=localStorage.getItem('userId');
    const getOrderDetails = async () => {
        try {
          const res = await Axios.get(API_ENDPOINTS.getManufactureOrderDetails_URL, {
            params: {
              user_id: user_id,
            },
          });
          
          setOrders(res.data);
          setIsLoading(false);
        } catch (err) {
          console.log('Error fetching data:', err);
          setIsLoading(false);
        }
      };
    useEffect(()=>{
        getOrderDetails();
    },[]);
    return ( 
        <div className="manufacture-details">
            <div className="manufacture-details-right">
                {filter ?(
                   <></>
                ):(
                  <></>
                )
                }
            </div>
            <div className="manufacture-details-left">
                <div className="manufacture-upper-details">

                </div>
                 <div className="manufacture-table-content">

                 </div>
            </div>
        </div>
     );
}
 
export default ManufactureHome;