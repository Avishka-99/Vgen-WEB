import React from "react";


const RestaurantItem = ({data,oneProductHandle}) => {
  console.log(data);
  const handleClick = () => {
    oneProductHandle(data);
  };


    return (  

      <div className="outer-frame">
          <div className="frame-up">
          <img src={`http://localhost:5001/uploads/products/${data.products[0].productImage}`} alt="product" />
          </div>
          <div className="frame-down">
            <h5>{data.products[0].productName}</h5>
            {/* <label htmlFor="">Product Name: </label><br /> */}
            {/* <span>{data.products[0].productName}</span><br /> */}
            {/* <label htmlFor="">Product quantity: </label><br />
            <span>{data.quantity}</span><br />
            <label htmlFor="">Product price: </label><br />
            <span>Rs .{data.price}</span><br /> */}
            {/* <p>This is {data.products[0].description}</p> */}
            <button className="frame-update-btn" onClick={handleClick}>update</button><br />
            <button className="frame-delete-btn" >delete</button>
          </div>
      </div>
    );
}
 
export default RestaurantItem;