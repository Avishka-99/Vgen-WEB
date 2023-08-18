import React from 'react';
import '../../styles/Restaurant/RestaurantOrders.css';

export const UserCard = ({ userData}) => {
 console.log(userData);
  return (
 
    <div class="user-card">
        {userData.profilePicture===null ?(
            <img class="profile-picture" src={`http://localhost:5001/uploads/users/user_image.png`} alt="Profile Picture"/>
        ):(
            <img class="profile-picture" src={`http://localhost:5001/uploads/products/${userData.profilePicture}`} alt="Profile Picture"/>
        )}
       
        <h6 class="user-name">{userData.name}</h6>
        <label htmlFor="" className='card-label'>Address :</label>
       
        <p class="address">{userData.address}</p>
        <label htmlFor="" className='card-label'>Contact No :</label>
        <p class="tel-no">{userData.contactNo}</p>
    </div>
  

  );
};
