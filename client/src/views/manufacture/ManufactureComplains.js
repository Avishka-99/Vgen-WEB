import React, { useEffect, useState } from 'react';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import ManufactureComplainAdd from "./ManufactureComplainAdd";
import '../../styles/manufacture/manufactureComplain.css'
import CommonPopupMessage from '../restaurant/CommonPopupMessage'
import * as ToastMessages from '../../components/ToastMessages';
import Toast from '../../components/Toast';

const ManufactureComplains = () => {

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
          
          
        }catch (err) {
        console.log('Error fetching data:', err);
      }
    };

    const showToast=(data)=>{
   
      if(data.type==='success'){
        getComplainDetails();
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
            <div className="m_complain-add">
                <div className="m_complain-add-inner">
                    <h1>Complains</h1>
                    <button className="m_add-complain-btn" onClick={()=>setPopup(true)}>Add complain</button>
                    <ManufactureComplainAdd trigger={popup} setTrigger={setPopup} getComplainDetails={getComplainDetails}></ManufactureComplainAdd>
                    <div className="m_table-content-complain-details">
              {complainDetails.length==0?(
                <p className="No-order-msg">No complains</p>
              ):(
                <table style={{marginTop:"20px"}}>
                      <thead>
                        <tr>
                          {/* <th>User</th> */}
                          <th>Complain Id</th>
                          <th>Complain date</th>
                          <th>Complain time</th>
                          <th>Description</th>
                          <th>Action status</th>
                          <th>Action date</th>
                          <th>Action </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                      {complainDetails.map((o) => (
                        <tr key={o.complainId}  >
                            {/* <td>{o.fullName}</td> */}
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
                            <td><button className='complain-delete' onClick={()=>{setDeletePopup(true);setComplain(o.complainId)}}>delete</button></td>
                           
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
 
export default ManufactureComplains;