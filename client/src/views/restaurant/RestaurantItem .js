import React from "react";


const RestaurantItem = ({data,oneProductHandle}) => {

  const handleClick = () => {
    oneProductHandle(data);
  };


    return (  

      <div className="outer-frame">
          <div className="frame-up">
          <img src={`http://localhost:5001/uploads/products/${data.products[0].productImage}`} />
          </div>
          <div className="frame-down">

            <label htmlFor="">Product Name: </label>
            <span>{data.products[0].productName}</span><br />
            <label htmlFor="">Product quantity: </label>
            <span>{data. quantity}</span><br />
            <label htmlFor="">Product price: </label>
            <span>Rs .{data.price}</span><br />
            <p>This is {data.products[0].description}</p>
            <button className="frame-update-btn" onClick={handleClick}>update</button><br />
            <button className="frame-delete-btn" >delete</button>
          </div>
      </div>
    );
}
 
export default RestaurantItem;