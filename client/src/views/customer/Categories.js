import React,{useState,useEffect} from 'react'
import * as API_ENDPOINTS from '../../api/ApiEndpoints'
import Axios from '../../api/Axios'










export default function Categories() {
  ////
  //image load
  
  const [formData,setFormData]=useState([])

  // const fetchData=async ()=>{
  //   try{
  //     const res=await Axios.get(API_ENDPOINTS.productGet_URL,{
  //       headers:{
  //       "Content-Type":"application/json"
  //       }
  //     });
  //     console.log(res.data);
  //     setFormData(res.data);
  //   }catch(err){
  //     console.log('Error fetching data:', err);
  //   }
  // };
  // useEffect(()=>{
  //   fetchData();

  // },[]);
  //

  const [quantity,setQuantity]=useState('')
  const [description,setDescription]=useState('')
  const [productName,setProductName]=useState('')
  const [price,setPrice]=useState('')
  const[productType,setProductType]=useState('')
  const[veganType,setVeganType]=useState('')
  const [productImage,setProductImage]=useState()

 
 const handleSubmit=(e)=>{
    //upload image    
    const formData=new FormData();

    formData.append('productImage',productImage);
    formData.append('quantity',quantity);
    formData.append('description',description);
    formData.append('productName',productName);
    formData.append('price',price);
    formData.append('productType',productType);
    formData.append('veganType',veganType);
    
    Axios.post(API_ENDPOINTS.productUpload_URL,formData);

  }
   
  const handleFiles=(e)=>{
    setProductImage(e.target.files[0]);

  }
 


  return (
    <div>
      <h1>Product Upload</h1>
     <form>
      <input type="text" placeholder="quantity" onChange={(e)=>{setQuantity(e.target.value)}}/>
      <input type="text" placeholder="description" onChange={(e)=>{setDescription(e.target.value)}}/>
      <input type="text" placeholder="productName" onChange={(e)=>{setProductName(e.target.value)}}/>
      <input type="text" placeholder="price" onChange={(e)=>{setPrice(e.target.value)}}/>
      <input type="text" placeholder="productType" onChange={(e)=>{setProductType(e.target.value)}}/>
      <input type='text' placeholder='veganType' onChange={(e)=>{setVeganType(e.target.value)}}/>
      <input type="file" className='productImage' placeholder="productImage" onChange={handleFiles}/>

      <button onClick={()=>{handleSubmit()} }>Submit</button>
      </form>

      <div>
      <h1>Card View</h1>

    </div>
    </div>
  )
}
