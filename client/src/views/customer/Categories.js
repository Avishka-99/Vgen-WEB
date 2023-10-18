import React, { useState, useEffect } from 'react';
import Axios from '../../api/Axios';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import '../../styles/customers_categories.css';
import * as ToastMessages from '../../components/ToastMessages';
import Toast from '../../components/Toast';
import { addToCart,incrementCounter } from "../../reducers/SetUserReducer";
export default function Categories() {
  const [formData, setFormData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRawCategory, setSelectedRawCategory] = useState(null);
  const [vegan_category, setVegan_category] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [limitError, setLimitError] = useState('');
  const dispatch = useDispatch();
  const toggleModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(!isModalOpen);
  };
  const navigate = useNavigate();
  const navigateTo = (page) => {
	
    navigate('/' + page);
  
};
  const addToCartHandler = (product) => {
    dispatch(addToCart(product));

    closeModal();
    navigateTo("cart");
  };
  const [quantity, setQuantity] = useState(1);

const incrementQuantity = () => {
 if(quantity<selectedProduct.sell_products[0].quantity){
  setQuantity(quantity + 1);
  }
  else{
    
    ToastMessages.warning('Quantity limit reached');
  }

};

const decrementQuantity = () => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
};

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };
  
  const fetchData = async () => {
    try {
      const res = await Axios.get("http://localhost:5001/api/productGet");
      console.log(res.data);
      setFormData(res.data);
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const filteredFormData = formData.filter(data => {
    if (selectedCategory === 'food') {
      if (vegan_category) {
        return data.product_category === 'food' && data.vegan_category === vegan_category;
      }
      return data.product_category === 'food';
    } else if (selectedCategory === 'raw_food') {
      if(selectedRawCategory){
        return data.row_category === selectedRawCategory;
      }
      return data.product_category === 'raw_food';
     
    }
    return true;
  });
  

  return (
    <div>
      <div className='button_con'>
        <div className='button-container1'>
          <button
            className={`button ${selectedCategory === 'food' ? 'selected-button' : ''}`}
            onClick={() => {
              setSelectedCategory('food');
              setSelectedRawCategory(null); // Reset raw food category selection
              setVegan_category(null); // Reset vegan category selection
            }}
          >
            Food
          </button>
          <button
            className={`button ${selectedCategory === 'raw_food' ? 'selected-button' : ''}`}

            onClick={() => {
              
              setSelectedCategory('raw_food');
              setSelectedRawCategory(null); // Reset raw food category selection
              setVegan_category(null); // Reset vegan category selection
            }}
          >
            Raw Food
          </button>
        </div>
        {selectedCategory === 'food' && (
          <div className='dropdown-container'>
            {/* <label htmlFor='veganCategory'>Select Vegan Category:</label> */}
            <select className='dropdown'
              id='veganCategory'
              value={vegan_category || ''}
              onChange={event => setVegan_category(event.target.value)}
            >
              <option value='Vegan'>Vegan</option>
              <option value='Vegetarian'>Vegetarian</option>
            </select>
          </div>
        )}
        {selectedCategory === 'raw_food' && (
          <div className='dropdown-container'>
            {/* <label htmlFor='rawCategory'>Select Raw Category:</label> */}
            <select className='dropdown'
              id='rawCategory'
              value={selectedRawCategory || ''}
              onChange={event => setSelectedRawCategory(event.target.value)}
            >
              <option value='milk'>Milk</option>
              <option value='Seed'>Seed</option>
              <option value='fruits'>Fruits</option>
              <option value='Vegetable'>Vegetables</option>
            </select>
          </div>
        )}
        <div className='restaurants'>
          {filteredFormData.map(data => (
            <div className='card' key={data.productId}>
              <div className='card-body'>
              <p style={{backgroundColor:"#03c988",fontWeight:"bold",textAlign:"center"}}>{data.product_category}</p>
                <h5>{data.productName}</h5>
               
                {data.sell_products.map((sellProduct, index) => (
                  <div key={index}>
                    <p>Rs. {sellProduct.price}</p>
                    <p>Quantity: {sellProduct.quantity}</p>
                  </div>
                ))}
                <img
                  className='product--image'
                  src={`http://localhost:5001/uploads/products/${data.productImage}`}
                  alt={data.productName}
                />
              
              </div>
              <button className='btn_cart_cus' onClick={() => toggleModal(data)}>
                  View Product
                </button>
            </div>
          ))}
          {isModalOpen && (
            <div className='modal'>
              <div className='modal-content'>
                <button className='modal-close-btn' onClick={closeModal}>
                X
                </button>
                {selectedProduct && (
                  <div className='modal-product-details'>
                    <p style={{fontFamily: 'poppins-medium'}}>{selectedProduct.productName}</p>
                    <img
                      className='product--image1'
                      src={`http://localhost:5001/uploads/products/${selectedProduct.productImage}`}
                      alt={selectedProduct.productName}
                    />

                    {/* Render other product details here */}
                    <div className='modal-product-details'>
                    <p className='prices'>Description:{selectedProduct.description}</p>
                    <p className="prices">Ingredients:{selectedProduct.ingredient}</p>
                    <p className='prices'>Vegan Type:{selectedProduct.vegan_category}</p>
                    <p className='prices'>Category:{selectedProduct.row_category}</p>
                    {selectedProduct.sell_products.map((sellProduct, index) => (
                    <div key={index}>
                    <p className='prices'>Rs.{sellProduct.price}</p>
                    <p className='prices'>Quantity:{sellProduct.quantity}</p>
                    
                    </div>
                    
                ))}
                
                </div>
                <div className="quantity-controls">
                  <button className="quantity-btn" onClick={decrementQuantity}>
                    <RiSubtractLine />
                  </button>
                  <span className="quantity">{quantity}</span>
                  
                  <button className="quantity-btn" onClick={incrementQuantity}>
                    <RiAddLine />
                  </button>      
                  {limitError && <p className="limit-error">{limitError}</p>}      
          
                
                </div>
              
                    <div className='btn_cart_cus' onClick={()=>addToCartHandler({
                      productId: selectedProduct.productId,
                      productName: selectedProduct.productName,
                      productImage: selectedProduct.productImage,
                      price: selectedProduct.sell_products[0].price,
                      quantity: quantity,
            
                    })} >
                      Add to Cart
                    </div>
                
                  </div>
                )}
              </div>
              <Toast duration={3000} />
            </div>
          )

          }
          
        </div>
      </div>
    </div>
  );
}


