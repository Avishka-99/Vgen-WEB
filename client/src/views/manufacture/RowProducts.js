import React, { useEffect, useState } from 'react'
import '../../styles/RestaurantProduct.css'
import RowProductAdd from './RowProductsAdd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import RestaurantItem from '../restaurant/RestaurantItem ';
import SearchIcon from '@mui/icons-material/Search';
import SearchResultList from '../restaurant/SearchResultList';
import RestaurantOneItem from '../restaurant/RestaurantOneItem';

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
  }, [])
 
  
 

  //responsive view of Carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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
            <RowProductAdd trigger={popup} setTrigger={setPopup}></RowProductAdd>
          </div>
        ):isSearching===true?(
           searchResult.length===0 ? (
            <p className='No-result-msg'>No results founds...</p>
           ):(
             <SearchResultList  results={searchResult} oneProductHandle={oneProductHandle}/>
            
           )
        ):isOneSet===true ? (
             <RestaurantOneItem result={oneResult}/>
            
        ):(
            <div className="product-card" >
              {!isLoading && (
                products.length === 0 ? (
                  <p>No products</p>
                ) : (
                  <Carousel responsive={responsive}>
                    {products.map(o => (<RestaurantItem key={o.id} data={o} oneProductHandle={oneProductHandle}/>))}
                  </Carousel>
                )
              )}
            </div>
        )}
        
        
        
      </div>
      
      
   </div>


  )
}
