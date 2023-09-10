import React, { useEffect, useState } from 'react';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import ComplainPopup from "./ComplainPopup";
import '../../styles/Restaurant/RestaurantComplain.css'
import * as ToastMessages from '../../components/ToastMessages';
import Toast from '../../components/Toast';
import CommonPopupMessage from './CommonPopupMessage'

const RestaurantComplain = () => {

const [popup,setPopup]=useState(false);
const [complainDetails,setComplainDetails]=useState([]);
const user_id=localStorage.getItem('userId');
const [deletePopup,setDeletePopup]=useState(false);
const [complain,setComplain]=useState(0);

useEffect(() => {
  getComplainDetails();
    
}, []);

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

const showToast=(data)=>{
   
  if(data.type==='success'){
    getComplainDetails();
    setDeletePopup(false);
    ToastMessages.success(data.message);
  }else{
    ToastMessages.error(data.message);
  }

}
  

const handleDelete= async (id)=>{
  try {
    const response=await Axios.delete(API_ENDPOINTS.deleteComplain_URL,{
      params:{
       id:id,
       }
    });
    showToast(response.data)
  } catch (err) {
    ToastMessages.error("error occurred")
    
  }
  
}
 
    return ( 
        <div className="complain-add">
            <div className="complain-add-inner">
                <h1>Complains</h1>
                <button className="add-complain-btn" onClick={()=>setPopup(true)}>Add complain</button>
                <ComplainPopup trigger={popup} setTrigger={setPopup} getComplainDetails={getComplainDetails}></ComplainPopup>
                <div className="table-content-complain-details">
          {complainDetails.length==0?(
            <p>No complains</p>
          ):(
            <table style={{marginTop:"100px"}}>
                  <thead>
                    <tr>
                     
                      <th>Complain Id</th>
                      <th>Complain date</th>
                      <th>Complain time</th>
                      <th>Description</th>
                      <th>complain status</th>
                      <th>Action date</th>
                      <th>Action </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  {complainDetails.map((o) => (
                    <tr key={o.complainId}  >
                        
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
                        <td><button className='complain-delete' onClick={()=>{setDeletePopup(true);setComplain(o.complainId)}}>Delete</button></td>
                    </tr>
                  ))}
                </tbody>

                  
          </table>

          )}
          
        </div>
            </div>
            <Toast duration={3000} />
          <CommonPopupMessage setTriggerNew={setDeletePopup} triggerNew={deletePopup} action={'delete'} type={'complain'} myFunction={()=>handleDelete(complain)} getComplainDetails={getComplainDetails} ></CommonPopupMessage>
        </div>
     );
}
 
export default RestaurantComplain;