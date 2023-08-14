import React, { useState, useEffect } from 'react';
import Axios from '../../api/Axios';
import '../../styles/customers_categories.css';

export default function Categories() {
  const [formData, setFormData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRawCategory, setSelectedRawCategory] = useState(null);
  const [vegan_category, setVegan_category] = useState(null);

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
              <option value='non_vegan'>Non-Vegan</option>
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
              <p>{data.product_category}</p>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


