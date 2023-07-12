import React,{useState,useEffect} from 'react'
import * as API_ENDPOINTS from '../../api/ApiEndpoints'
import Axios from '../../api/Axios'
import axios from 'axios'





export default function Categories() {
  const [quantity,setQuantity]=useState('')
  const [description,setDescription]=useState('')
  const [productName,setProductName]=useState('')
  const [price,setPrice]=useState('')
  const [productImage,setProductImage]=useState()
 
 const handleSubmit=(e)=>{
    //upload image    
    const formData=new FormData();
    formData.append('productImage',productImage);
    Axios.post(API_ENDPOINTS.productUpload_URL,{quantity,description,productName,price,formData})
    
    .then((res)=>{
      console.log(res.data)
    }
    )

  }
   
  const handleFiles=(e)=>{
    setProductImage(e.target.files[0]);
  }


  return (
    <div>
     <form>
      <input type="text" placeholder="quantity" onChange={(e)=>{setQuantity(e.target.value)}}/>
      <input type="text" placeholder="description" onChange={(e)=>{setDescription(e.target.value)}}/>
      <input type="text" placeholder="productName" onChange={(e)=>{setProductName(e.target.value)}}/>
      <input type="text" placeholder="price" onChange={(e)=>{setPrice(e.target.value)}}/>
      <input type="file" className='productImage' placeholder="productImage" onChange={handleFiles}/>

      <button onClick={()=>{handleSubmit()} }>Submit</button>
      </form>
    </div>
  )
}
