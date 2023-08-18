import React from 'react';
import '../../styles/Restaurant/ManufactureCard.css'
const CardComponent = ({ imageSrc, name, description, price }) => {
    console.log(name)
  return (
    <div className="raw_card">
      <div className="card-image">
        <img src={`http://localhost:5001/uploads/users/${imageSrc}`} alt={name} style={{width:"300px",height:"200px"}} />
      </div>
     
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        {description && <p className="card-description">{description}</p>}
        {price && <p className="card-price">${price}</p>}
        <button className="see-more-button">See More</button>
      </div>
    </div>
  );
};

export default CardComponent;
