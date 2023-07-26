import React,{useState} from 'react'
import * as API_ENDPOINTS from '../../api/ApiEndpoints'
import Axios from '../../api/Axios'
import { Link } from 'react-router-dom';
import '../../styles/RestaurantProduct.css'

const RestaurantProductAdd = () => {

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
        <div className='addProduct'>
            <h1>Product add</h1>
            <Link className='Back-link' to='/products'>Back</Link>
            <form className="form-container">
                <label htmlFor="productImage">Product Image:</label><br />
                <input type="file" id="productImage" className="productImage" onChange={handleFiles} /><br />

                <label htmlFor="productName">Product Name:</label><br />
                <input type="text" id="productName" placeholder="Product Name" onChange={(e) => { setProductName(e.target.value) }} /><br />

                <label htmlFor="description">Description:</label><br />
                <input type="text" id="description" placeholder="Description" onChange={(e) => { setDescription(e.target.value) }} /><br />

                <label htmlFor="quantity">Quantity:</label><br />
                <input type="text" id="quantity" placeholder="Quantity" onChange={(e) => { setQuantity(e.target.value) }} /><br />

                <label htmlFor="price">Price:</label><br />
                <input type="text" id="price" placeholder="Price" onChange={(e) => { setPrice(e.target.value) }} /><br />

                <button className="submit-button" onClick={() => { handleSubmit() }}>Submit</button>
            </form>

        </div>
        
       
     );
}
 
export default RestaurantProductAdd;