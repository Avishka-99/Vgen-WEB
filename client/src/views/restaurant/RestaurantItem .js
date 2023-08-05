import React from "react";


const RestaurantItem = ({data}) => {




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
            <p>{data.products[0].description}</p>
            <button>update</button><br />
            <button>delete</button>
          </div>
      </div>
    );
}
 
export default RestaurantItem;