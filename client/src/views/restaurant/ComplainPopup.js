import React,{useState,useEffect} from 'react'
import * as API_ENDPOINTS from '../../api/ApiEndpoints'
import Axios from '../../api/Axios'
import CloseIcon from '@mui/icons-material/Close';
import '../../styles/Restaurant/RestaurantComplain.css'



const ComplainPopup = (props) => {

  const [orderId,setOrderId]=useState([]);
  const [description,setDescription]=useState('');
  const [u_orderId,setU_OrderId]=useState('');
  const [Image,setPImage]=useState();
  const user_id=localStorage.getItem('userId');
    
  const handleSubmit=(e)=>{
    //upload image    
    const formData=new FormData();
    formData.append('user_id',user_id);
    formData.append('photo',Image);
    formData.append('description',description);
    formData.append('orderId',u_orderId);
 
    Axios.post(API_ENDPOINTS.addComplain_URL,formData);
  

  }
   
  const handleFiles=(e)=>{
    setPImage(e.target.files[0]);

  }
   


  useEffect(() => {
    async function getOrdersId(){
      try {
        const res = await Axios.get(API_ENDPOINTS.getAllComplainIDRelevantRestaurant_URL, {
          params: {
            user_id: user_id,
          },
        });
        setOrderId(res.data);
        
        
      } catch (err) {
        console.log('Error fetching data:', err);
        
      }
    };
    getOrdersId();
  
}, []);
     
   
    return props.trigger ? ( 
      <div className="complain-add-popup">
        <div className="complain-add-popup-inner">
        <button className='Close-Btn' onClick={() => props.setTrigger(false)}><CloseIcon/></button>
        
        <h2>complain add</h2>
        <div className="complain-add">
            <label htmlFor="orderId" >order_id:</label><br />
            <select name="" id="" className='orderIdSelect' onChange={(e) => { setU_OrderId(e.target.value) }}>
                <option value="">--select one--</option>
                {orderId.map((o)=>(
                    <option value={o.orderId}>{o.orderId}</option>
                ))};
            </select><br />
            
            <label htmlFor="description">Description:</label><br />
            <input type="text" id="description" placeholder="Description" onChange={(e) => { setDescription(e.target.value) }} required/><br />

            <label htmlFor="productImage" id='Product-image'>Image:</label><br />
            <input type="file" id="productImage" className="productImage" onChange={handleFiles} /><br />

            
        </div>    
        <button className="complain-submit-button" onClick={() => { handleSubmit(); props.setTrigger(false)} }>Submit</button>          

                  
      </div>

    </div>
      
        
        
       
     ): null;
}
 
export default ComplainPopup;