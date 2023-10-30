import React from "react";
import "../../styles/staff/staffhome.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const Review = ({ rating, userImage, userName, reviewText }) => {
    // Create an array of stars based on the rating
    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i <= rating ? solidStar : regularStar} // Use solid or regular star icon based on rating
          size="sm"
          style={{ color: i <= rating ? "#ffcc00" : "#ccc" }} // Yellow for filled, gray for unfilled stars
        />
      );
    }
  
    return (
      <div className="review">
        <div className="rating">{stars}</div>
        <div className="user-info">
          <div className="user-image">
            <img src={userImage} alt={userName} width="28" height="28" />
          </div>
          <div className="user-name">{userName}</div>
        </div>
        <div className="review-text">{reviewText}</div>
      </div>
    );
  };  

export default Review;