import React from "react";


const RestaurantItem = ({data}) => {




    return (  

      <div className="outer-frame">
          <div className="frame-up">
          <img src={`http://localhost:5001/uploads/products/${data.products[0].productImage}`} />
          </div>
          <div className="frame-down">

            <p>{data.productId}</p>
            <p>{data. quantity}</p>
            <p>{data.price}</p>
            <p>{data.products[0].productName}</p>
            <p>{data.products[0].description}</p>
            <button>update</button><br />
            <button>delete</button>
          </div>
      </div>
    );
}
 
export default RestaurantItem;