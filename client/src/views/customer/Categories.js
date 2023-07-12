import React,{useState,useEffect} from 'react'
import * as API_ENDPOINTS from '../../api/ApiEndpoints'
import Axios from '../../api/Axios'
import axios from 'axios'









export default function Categories() {
  ////
  //image load
  
  // const [formData,setFormData]=useState([])
  // useEffect(()=>{
  //   axios.get(API_ENDPOINTS.productGet_URL).then((res)=>{
  //     setFormData(res.data) 

  //   })
  // },[])
  ////

  const [quantity,setQuantity]=useState('')
  const [description,setDescription]=useState('')
  const [productName,setProductName]=useState('')
  const [price,setPrice]=useState('')
  const [productImage,setProductImage]=useState()
 
 const handleSubmit=(e)=>{
    //upload image    
    const formData=new FormData();
    formData.append('productImage',productImage);
    formData.append('quantity',quantity);
    formData.append('description',description);
    formData.append('productName',productName);
    formData.append('price',price);
    
    Axios.post(API_ENDPOINTS.productUpload_URL,formData);

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

      {/* <div>
      <h1>Card View</h1>
      <div className="card-container">
        {formData.map((data) => (
          <div className="card" key={data.id}>
            <div className="card-body">
              <h5 className="card-title">{data.productName}</h5>
              <p className="card-text">{data.description}</p>
              <p className="card-text">{data.price}</p>
              <p className="card-text">{data.quantity}</p>
              <img src={data.productImage} alt="productImage" />
 
          </div>
          </div>
        ))}
      </div>
    </div> */}
    </div>
  )
}
