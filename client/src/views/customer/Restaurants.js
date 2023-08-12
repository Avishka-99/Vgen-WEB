
import Axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
//import css
import "../../styles/customerRestaurant.css";

export default function Restaurants() {
  const [modal, setModal] = useState(false);
  const [formData_1,setFormData_1]=useState([])


  const fetchData1 = async () => {
    try {
      const res = await Axios.get("http://localhost:5001/api/restaurantGet");
      console.log(res.data);
      setFormData_1(res.data);
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  };
  useEffect(() => {
    fetchData1();

  },[]);
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };
  //  const toggleModal = () => {
  //   setModal(!modal);
  // };
  return (
    <div className="restaurants">  
         {formData_1.map((data) => (
    <div className='card_res' key={data.restaurantId}>
    <p className='restaurant_type'>{data.resturantType}</p>
    <img className='restaurant--image' src={`http://localhost:5001/uploads/restaurants/${data.restaurantImage}`} alt={data.restaurantName} />
    <p className='restaurant_name'>{data.restaurantName}</p>
    <p className='locations'>Location</p>
    <button className='btn_cart'>
      View Restaurant
    </button>
  </div>
          ))} </div>
  )
}
