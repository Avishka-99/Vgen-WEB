import React, { useState, useEffect } from 'react';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import Axios from '../../api/Axios';
import '../../styles/customers_categories.css';

export default function Categories() {
  const [formData, setFormData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRawCategory, setSelectedRawCategory] = useState(null);
  const [vegan_category, setVegan_category] = useState(null);

  const fetchData = async () => {
    try {
      const res = await Axios.get(API_ENDPOINTS.productGet_URL, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res.data);
      setFormData(res.data);
    } catch (err) {
      console.log('Error fetching data:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredFormData = formData.filter(data => {
    if (selectedRawCategory === 'raw_food' && selectedRawCategory) {
      return data.row_category === selectedRawCategory;
    }
	if(selectedCategory && selectedCategory === 'food'){
		return data.vegan_category === vegan_category;
	}
    return true;
  });

  return (
      <div>
	   <div className='button_con'>
        <div className='button-container'>
          <button
            className={`button ${selectedCategory === 'food' ? 'selected-button' : ''}`}
            onClick={() => {
              setSelectedCategory('food');
              setSelectedRawCategory(null); // Reset raw food category selection
               // Reset vegan category selection
            }}
          >
            Food
          </button>
          <button
            className={`button ${selectedRawCategory === 'raw_food' ? 'selected-button' : ''}`}
            onClick={() => {
              setSelectedCategory('raw_food');
              setSelectedRawCategory('raw_food'); // Reset raw food category selection
			  // Reset vegan category selection
            }}
          >
            Raw Food
          </button>
        </div>
		{selectedCategory === 'food' && (
          <div className='dropdown-container'>
            <label htmlFor='veganCategory'>Select Vegan Category:</label>
            <select
              id='veganCategory'
              value={vegan_category || ''}
              onChange={event => setVegan_category(event.target.value)}
            >
              <option value='food'>All</option>
              <option value='Vegan'>Vegan</option>
              <option value='non_vegan'>Non-Vegan</option>
			  <option value='Vegetarian'>Vegetarian</option>
            </select>
          </div>
        )}
		{selectedRawCategory === 'raw_food' && (
          <div className='dropdown-container'>
            <label htmlFor='veganCategory'>Select Raw Category:</label>
            <select
              id='veganCategory'
              value={selectedRawCategory || ''}
              onChange={event => setSelectedRawCategory(event.target.value)}
            >
              <option value='raw_food'>All</option>
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
                <h5>{data.productName}</h5>
                <p>{data.description}</p>
                <p>{data.product_category}</p>
                <p>{data.price}</p>
                <p>{data.quantity}</p>
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

