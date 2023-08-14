import React, { useEffect, useState } from 'react';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import ComplainPopup from "./ComplainPopup";
import '../../styles/RestaurantComplain.css'

const RestaurantComplain = () => {

const [popup,setPopup]=useState(false);
const [complainDetails,setComplainDetails]=useState([]);
const user_id=localStorage.getItem('userId');


useEffect(() => {
    async function getComplainDetails(){
      try {
        const res = await Axios.get(API_ENDPOINTS.getComplain_URL, {
          params: {
            user_id: user_id,
          },
        });
        setComplainDetails(res.data);
        
        
      } catch (err) {
        console.log('Error fetching data:', err);
        
      }
    };
    getComplainDetails();
    
  }, []);
    console.log(complainDetails);
    return ( 
        <div className="complain-add">
            <div className="complain-add-inner">
                <h1>Complains</h1>
                <button className="add-complain-btn" onClick={()=>setPopup(true)}>Add complain</button>
                <ComplainPopup trigger={popup} setTrigger={setPopup}></ComplainPopup>
                <div className="table-content-complain-details">
          {complainDetails.length==0?(
            <p>No complains</p>
          ):(
            <table style={{marginTop:"100px"}}>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Complain Id</th>
                      <th>Complain date</th>
                      <th>Complain time</th>
                      <th>Description</th>
                      <th>complain status</th>
                      <th>Action date</th>
                      <th>Action </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                  {complainDetails.map((o) => (
                    <tr key={o.complainId}  >
                        <td>{o.fullName}</td>
                        <td>{o.complainId}</td>
                        <td>{o.date}</td>
                        <td>{o.time}</td>
                        <td>{o.description}</td>
                        <td>{o.state===0?(
                            <p style={{color:'red'}}>pending</p>
                        ):(
                          <p style={{color:'green'}}>complete</p>
                        )}
                        
                        </td>
                        <td>{o.action_date}</td>
                        <td>{o.action===null ? (
                          <p style={{color:'red'}}>No message</p>
                        ):(
                          <p style={{color:'green'}}>{o.action}</p>
                        )
                        }</td>
                     
                    </tr>
                  ))}
                </tbody>

                  
          </table>

          )}
          
        </div>
            </div>
        </div>
     );
}
 
export default RestaurantComplain;