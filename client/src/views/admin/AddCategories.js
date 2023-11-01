import React, { useEffect, useState } from 'react';
import '../../styles/Admin/Categories.css';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';

export default function AddCategories() {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const formattedDate = `${dayOfWeek} ${dayOfMonth
    .toString()
    .padStart(2, '0')},  ${month} ${year}`;

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); // State to store selected category
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    Axios.post(API_ENDPOINTS.FETCH_ALL_CATEGORIES, {})
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const fetchAllFoods = (name) => {
    Axios.post('/api/fetchallfoods', { category: name })
      .then((response) => {
        const newFoods = response.data;
        console.log(newFoods);

        if (newFoods.length > 0) {
          setFoods(newFoods);
          setSelectedCategory(name); // Update the selectedCategory state when an activity container is clicked
        } else {
          console.log('No food items found for this category.');
        }
      });
  };

  return (
    <div className="Cat-Container">
      <div className="Cat-Top">
        <div className="Cat-TopLeft">
          <div className="Cat-TopLine">
            <div className="Cat-HeadingText">VGen Categories</div>
            <div className="Cat-NotificationButton"></div>
          </div>
          <div>
            <div className="Cat-DateText">{formattedDate}</div>
          </div>
          <br />
          <div>
            <div className="Cat-SubHeadingText">Manage Categories</div>
            <div className="Cat-SelectedCategory">{selectedCategory}</div>
          </div>
          <div className="Cat-SubContainer">
            <div className="Cat-LeftContainer">
              {foods.map((food, index) => (
                <div className="Cat-CardContainer" key={index}>
                  <div className="Cat-FirstDivider">
                    <div className="Cat-CardIconContainer">
                      <img
                        src={`http://localhost:5001/uploads/products/${food.image}`}
                        alt={food.name}
                        style={{ width: '80px', height: '80px' }}
                      />
                    </div>
                    <div className="Cat-BodyText">{food.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="Cat-SubContainer"></div>
        </div>
        <div className="Cat-Right">
          <div className="Cat-SubHeadingText">
            Select Category
            <div className="Cat-FilterButton1">Filter</div>
          </div>
          <div>
            <div className="Cat-RightContainer">
              {categories.map((item, index) => (
                <React.Fragment key={item.id}>
                  <div className="Cat-Activities" onClick={() => fetchAllFoods(item.name)}>
                    <div className="Cat-ActivityIconContainer">
                      <img
                        src={`http://localhost:5001/uploads/thumbnails/${item.image}`}
                        style={{ width: '35px', height: '35px' }}
                      />
                    </div>
                    <div className="Cat-ActivityText">{item.name}</div>
                  </div>
                  {index < categories.length - 1 && <div className="Cat-Divider"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
