import React, { useEffect, useState } from 'react';
import Axios from '../../api/Axios';
import AddCategoryForm from './addNewCategories';
import '../../styles/Admin/Categories.css';

const daysOfWeek = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

export default function AddCategories() {
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);
  const [addCategoriesForm, setAddCategoriesForm] = useState(false);

  useEffect(() => {
    Axios.get('http://localhost:5001/api/get_category')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate().toString().padStart(2, '0');
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const formattedDate = `${dayOfWeek} ${dayOfMonth}, ${month} ${year}`;

  const openForm = () => {
    setAddCategoriesForm(true);
  };

  const closeForm = () => {
    setAddCategoriesForm(false);
  };
  const getFoods = (name) => {
    Axios.get(`http://localhost:5001/api/get_products/`, { params: { name } })
      .then((response) => {
        setFoods(response.data);
      })
      .catch((error) => {
        console.error('Error fetching foods:', error);
      });
  }

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
            <div onClick={openForm} className="Cat-SelectedCategory">Add Categories</div>
            {addCategoriesForm && (
              <div className='modal'>
                <div className='modal-content' style={{ width: '70%' }}>
                  <span className='close' onClick={closeForm}>
                   X
                  </span>
                  <AddCategoryForm onClose={closeForm} />
                </div>
              </div>
            )}
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
                  <div className="Cat-Activities" >
                    <div className="Cat-ActivityIconContainer" onClick={()=>getFoods(item.name)}>
                      <img
                        src={`http://localhost:5001/uploads/thumbnails/${item.image}`}
                        style={{ width: '35px', height: '35px' }}
                        alt={item.name}
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

