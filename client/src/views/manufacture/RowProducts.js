import React, { useEffect, useState } from 'react'
import '../../styles/Restaurant/RestaurantProduct.css'
import RowProductAdd from './RowProductsAdd';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import RestaurantItem from '../restaurant/RestaurantItem ';
import SearchIcon from '@mui/icons-material/Search';
import SearchResultList from '../restaurant/SearchResultList';
import RestaurantOneItem from '../restaurant/RestaurantOneItem';
import CommonPopupMessage from '../restaurant/CommonPopupMessage'
import * as ToastMessages from '../../components/ToastMessages';
import Toast from '../../components/Toast';

export default function RowProducts() {
  const [popup,setPopup]=useState(false);
  const [products,setProducts]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [isSearching,setIsSearching]=useState(false);
  const [searchResult,setSearchResult]=useState([]);
  const user_id=localStorage.getItem('userId');
  const [input,setInput]=useState("");
  const [isOneSet,SetIsOneSet]=useState(false);
  const [oneResult,SetOneResult]=useState([]);
  const [deletePopup,setDeletePopup]=useState(false);
  const [del_productId,setDel_productId]=useState();

  //find one product using search bar
  const oneProductHandle=(result)=>{
    SetIsOneSet(true);
    setIsSearching(false);
    SetOneResult(result);
   
  }
  
  //show the all product when page is loading
  const getProducts = async () => {
    try {
      const res = await Axios.get(API_ENDPOINTS.getAllRowProduct_URL, {
        params: {
          user_id: user_id,
        },
      });
  
      setProducts(res.data);
     
      setIsLoading(false);
    } catch (err) {
      console.log('Error fetching data:', err);
      setIsLoading(false);
    }
  };
 
 

  useEffect(() => {
    getProducts();
    console.log(setProducts);
 },[])
 
  
 //fetch the data when searching
  const searchData =(value)=>{
    Axios.get(API_ENDPOINTS.getAllRowProduct_URL, {
      params: {
        user_id: user_id,
      },
    }).then((response)=>{
          const result=response.data.filter((product)=>{
            return(
              value &&
              product &&
              product.products[0].productName &&
              product.products[0].productName.toLowerCase().includes(value)
            );
            
          });
          
          setSearchResult(result);
          setIsSearching(true);
          console.log(searchResult);
          
      });
  };
  const handleSearch=(value)=>{
     setInput(value);
     searchData(value);
  }
  const handleDelete=async (id)=>{
    try {
      const response= await Axios.post(API_ENDPOINTS.deleteProduct_URL,{
        id:id,
          
      }).then((response)=>showToast(response.data));;
      console.log("Axios Response:", response.data);
    } catch (err) {
      console.log('Error fetching data:', err);
      
    }
  }
 
  const showToast=(data)=>{
   
    if(data.type==='success'){
      SetIsOneSet(false);
      setDeletePopup(false);
      getProducts();
      ToastMessages.success(data.message);
    }else{
      ToastMessages.error(data.message);
    }

  }
  

  return (
   
   
   <div className="product-details">
       <div className="product-details-header">
          <h1>Row products</h1>
          <button className='Product-add-btn' onClick={()=>setPopup(true)}>Add product</button><br />
          <div className="input-wrapper">
            <SearchIcon/>
            <input type="search" placeholder='type of search' value={input} onChange={(e)=>handleSearch(e.target.value)}/>
           
          </div>
          
       </div>
      <div className="product-details-content">
        {popup===true ?(
          <div className="popup">
            <RowProductAdd trigger={popup} setTrigger={setPopup}  getProducts={ getProducts}></RowProductAdd>
          </div>
        ):isSearching===true?(
           searchResult.length===0 ? (
            <p className='No-result-msg'>No results founds...</p>
           ):(
             <SearchResultList  results={searchResult} oneProductHandle={oneProductHandle}/>
            
           )
        ):isOneSet===true ? (
             <RestaurantOneItem result={oneResult} SetIsOneSet={SetIsOneSet} setDel_productId={setDel_productId} setDeletePopup={setDeletePopup}/>
            
        ):(
            <div className="product-card" >
              {!isLoading && (
                products.length === 0 ? (
                  <p className="No-order-msg">No products</p>
                ) : (
                  <>
                    {products.map(o => (<RestaurantItem key={o.id} data={o} oneProductHandle={oneProductHandle} setDel_productId={setDel_productId} setDeletePopup={setDeletePopup}/>))}
                  </>
                  
                    
                 
                )
              )}
            </div>
        )}
        
        
        
      </div>
      <Toast duration={3000} />
      <CommonPopupMessage setTriggerNew={setDeletePopup} triggerNew={deletePopup} action={'delete'} type={'product'} myFunction={()=>handleDelete(del_productId)} getProducts={getProducts} ></CommonPopupMessage>  
   </div>


  )
}
