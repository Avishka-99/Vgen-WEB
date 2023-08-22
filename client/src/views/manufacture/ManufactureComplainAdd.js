import React,{useState,useEffect} from 'react'
import * as API_ENDPOINTS from '../../api/ApiEndpoints'
import Axios from '../../api/Axios'
import CloseIcon from '@mui/icons-material/Close';
import '../../styles/manufacture/manufactureComplain.css'
import * as ToastMessages from '../../components/ToastMessages';
import Toast from '../../components/Toast';

const ManufactureComplainAdd = (props) => {

  const [orderId,setOrderId]=useState([]);
  const [description,setDescription]=useState('');
  const [u_orderId,setU_OrderId]=useState('');
  const [Image,setPImage]=useState();
  const user_id=localStorage.getItem('userId');
    
  const handleSubmit=(e)=>{
    console.log()
    if(u_orderId==='' || description===''){
       if(u_orderId===''){
        ToastMessages.error("Please select orderId");
       }
       if(description===''){
        ToastMessages.error("Please fill the description");
       }
    }
    else{
      const formData=new FormData();
      formData.append('user_id',user_id);
      formData.append('photo',Image);
      formData.append('description',description);
      formData.append('orderId',u_orderId);
      Axios.post(API_ENDPOINTS.addComplain_URL,formData).then((response)=>showToast(response.data));
    }
  }
   
  const handleFiles=(e)=>{
    setPImage(e.target.files[0]);
  }
  
  const showToast=(data)=>{
   
    if(data.type==='success'){
      props.getComplainDetails();
      refreshInputs();
      ToastMessages.success(data.message);
    }else{
      ToastMessages.error(data.message);
    }

  }

  const refreshInputs=()=>{
    setU_OrderId('')
    setDescription('');
    setPImage(null);
  }


  useEffect(() => {
    async function getOrdersId(){
      try {
        const res = await Axios.get(API_ENDPOINTS.getAllComplainIDRelevantManufacture_URL, {
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
      <div className="m_complain-add-popup">
        <div className="m_complain-add-popup-inner">
          <button className='Close-Btn' onClick={() => props.setTrigger(false)}><CloseIcon/></button>
          
          <h2>complain add</h2>
          <div className="m_complain-add">
              <label htmlFor="orderId" >order_id:</label><br />
              <select name="" id="" className='orderIdSelect'value={u_orderId} onChange={(e) => { setU_OrderId(e.target.value) }}>
                  <option value="">--select one--</option>
                  {orderId.map((o)=>(
                      <option key={o.orderId} value={o.orderId}>{o.orderId}</option>
                  ))};
              </select><br />
              
              <label htmlFor="description">Description:</label><br />
              <input type="text" id="description" placeholder="Description" value={description} onChange={(e) => { setDescription(e.target.value) }} /><br />

              <label htmlFor="productImage" id='Product-image'>Image:</label><br />
              <input type="file" id="productImage" className="productImage"  onChange={handleFiles} /><br />

              
          </div>    
          <button className="m_complain-submit-button" onClick={() =>handleSubmit()}>Submit</button>          
        </div>
        <Toast duration={3000} />
      </div>
    ): null;
}
 
export default ManufactureComplainAdd;