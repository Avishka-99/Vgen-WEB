import React,{useState} from 'react'
import * as API_ENDPOINTS from '../../api/ApiEndpoints'
import Axios from '../../api/Axios'
import CloseIcon from '@mui/icons-material/Close';
import '../../styles/Restaurant/RestaurantProduct.css'



const RowProductsAdd = (props) => {
   
    const [quantity,setQuantity]=useState('');
    const [description,setDescription]=useState('');
    const [productName,setProductName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [productImage,setProductImage]=useState();
    const user_id=localStorage.getItem('userId');
   
   const handleSubmit=(e)=>{
      //upload image    
      const formData=new FormData();
      formData.append('productImage',productImage);
      formData.append('quantity',quantity);
      formData.append('description',description);
      formData.append('productName',productName);
      formData.append('price',price);
      formData.append('category',category);
      formData.append('user_id',user_id);
      Axios.post(API_ENDPOINTS.addRowProducts_URL,formData,);
  
  
    }
     
    const handleFiles=(e)=>{
      setProductImage(e.target.files[0]);
  
    }
    return props.trigger ? ( 
      <div className="product-add-popup">
        <div className="product-add-popup-inner" >
        <button className='Close-Btn' onClick={() => props.setTrigger(false)}><CloseIcon/></button>
        
        <h2>Product add</h2>
        <div className="product-add">
          <label htmlFor="productImage" id='Product-image'>Product Image:</label><br />
          <input type="file" id="productImage" className="productImage" onChange={handleFiles} required/><br />

          <label htmlFor="productName">Product Name:</label><br />
          <input type="text" id="productName" placeholder="Product Name" onChange={(e) => { setProductName(e.target.value) }} required/><br />
        
            <label htmlFor="description">Description:</label><br />
            <input type="text" id="description" placeholder="Description" onChange={(e) => { setDescription(e.target.value) }} required/><br />

            <label htmlFor="quantity">Quantity:</label><br />
            <input type="text" id="quantity" placeholder="Quantity" onChange={(e) => { setQuantity(e.target.value) }} required/><br />

            <label htmlFor="price">Price:</label><br />
            <input type="text" id="price" placeholder="Price" onChange={(e) => { setPrice(e.target.value) }} required/><br />
             
            <label htmlFor="price">Category:</label><br />
            <select onChange={(e) => { setCategory(e.target.value) }} required className='productAddSelect'>
                <option value="Vegetable">Vegetable</option>
                <option value="fruits">Fruit</option>
                <option value="milk">Milk</option>
                <option value="feed">Feed</option>
                <option value="other">Other</option>
            </select>
            
        </div>    
        <button className="submit-button" onClick={() => { handleSubmit(); props.setTrigger(false)} } >Submit</button>          

                  
      </div>

    </div>
      
        
        
       
     ): null;
}
 
export default RowProductsAdd;