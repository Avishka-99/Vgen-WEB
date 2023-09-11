import React,{useState} from 'react'
import * as API_ENDPOINTS from '../../api/ApiEndpoints'
import Axios from '../../api/Axios'
import CloseIcon from '@mui/icons-material/Close';
import '../../styles/Restaurant/RestaurantProduct.css'
import * as ToastMessages from '../../components/ToastMessages';
import Toast from '../../components/Toast';

const RowProductsAdd = (props) => {
   
    const [quantity,setQuantity]=useState('');
    const [description,setDescription]=useState('');
    const [productName,setProductName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [productImage,setProductImage]=useState('');
    const [priceBase,setPriceBase]=useState('');
    const user_id=localStorage.getItem('userId');

    const resetData=()=>{
      setQuantity('');
      setDescription('');
      setProductName('');
      setPrice('');
      setCategory('');
      setProductImage('');
      setPriceBase('');
    }
    
    const showToast=(data)=>{
      if(data.type==='success'){
        props.getProducts();
        resetData();
        ToastMessages.success(data.message);
      }else{
        ToastMessages.error(data.message);
      }

    }
   
   const handleSubmit=(e)=>{
      if(quantity==='' || description==='' || productName==='' || productImage==='' || price==='' || category==='' || priceBase==='') {
        ToastMessages.error("Please fill the all data");
      } 
      else{
        const formData=new FormData();
        formData.append('productImage',productImage);
        formData.append('quantity',quantity);
        formData.append('description',description);
        formData.append('productName',productName);
        formData.append('price',price);
        formData.append('category',category);
        formData.append('priceBase',priceBase);
        formData.append('user_id',user_id);
        Axios.post(API_ENDPOINTS.addRowProducts_URL,formData,).then((response)=>showToast(response.data)
        );
      }
      
  
  
    }
     
    const handleFiles=(e)=>{
      setProductImage(e.target.files[0]);
  
    }
    return props.trigger ? ( 
      <div className="product-add-popup">
        <div className="product-add-popup-inner"style={{maxHeight:'650px'}} >
        <button className='Close-Btn' onClick={() => props.setTrigger(false)}><CloseIcon/></button>
        
        <h2>Product add</h2>
        <div className="product-add">
          <label htmlFor="productImage" id='Product-image'>Product Image:</label><br />
          <input type="file" id="productImage" className="productImage" onChange={handleFiles} required/><br />

          <label htmlFor="productName">Product Name:</label><br />
          <input type="text" id="productName" placeholder="Product Name" value={productName} onChange={(e) => { setProductName(e.target.value) }} required/><br />
        
            <label htmlFor="description">Description:</label><br />
            <input type="text" id="description" placeholder="Description" value={description} onChange={(e) => { setDescription(e.target.value) }} required/><br />

            <label htmlFor="quantity">Quantity:</label><br />
            <input type="text" id="quantity" placeholder="Quantity" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} required/><br />

            <label htmlFor="price">Price:</label><br />
            <input type="text" id="price" placeholder="Price" value={price} onChange={(e) => { setPrice(e.target.value) }} required/><br />
             
            <label htmlFor="category">Category:</label><br />
            <select onChange={(e) => { setCategory(e.target.value) }} value={category} required className='productAddSelect'>
                <option value="Vegetable">Vegetable</option>
                <option value="fruits">Fruit</option>
                <option value="milk">Milk</option>
                <option value="feed">Feed</option>
                <option value="other">Other</option>
            </select>

            <label htmlFor="priceBase">Price is base on:</label><br />
            <select onChange={(e) => { setPriceBase(e.target.value) }} value={category} required className='productAddSelect'>
                <option value="Liter">Per Liter</option>
                <option value="Kg">Per Kg</option>
                <option value="g">Per g</option>
                <option value="one ">Per one item</option>
                <option value="box">Per box</option>
            </select>
            
        </div>    
        <button className="submit-button" onClick={()=>{handleSubmit()}} style={{top:"580px"}}>Submit</button>          

                  
      </div>
      <Toast duration={3000} />
    </div>
      
        
        
       
     ): null;
}
 
export default RowProductsAdd;