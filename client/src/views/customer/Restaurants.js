
import Axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
//import css
import "../../styles/customerRestaurant.css";
import getGeolocationAddress from "./geoAddress";

export default function Restaurants() {
  const [modal, setModal] = useState(false);
  const [formData_1,setFormData_1]=useState([])
  const [resolvedAddresses, setResolvedAddresses] = useState([]);
  const [apiKey, setApiKey] = useState('YOUR_GOOGLE_MAPS_API_KEY');


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
  useEffect(() => {
    const fetchRestaurantAddresses = async () => {
      const addressesPromises = formData_1.map((data) => {
        return getGeolocationAddress(data.latitude, data.longitude, apiKey);
      });
  
      try {
        const resolved = await Promise.all(addressesPromises);
        setResolvedAddresses(resolved);
      } catch (error) {
        console.error('Error fetching restaurant addresses:', error);
      }
    };
  
    fetchRestaurantAddresses();
  }, [formData_1]);
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
             {formData_1.map((data,index) => (
              <div className='card' key={data.restaurantId}>
                <p className='vegan_type'>{data.resturantType}</p>
                <img
                  className='product--image'
                  src={`http://localhost:5001/uploads/restaurants/${data.image}`}
                  alt={data.resturantName}
                />
                <p className='product_name'>{data.resturantName}</p>
                <p className='prices'>
                Location:{resolvedAddresses[index]||'Loading address..'}</p>
                <button className='btn_res'>
                  View Restaurant
                </button>
              </div>
            ))} </div>
  )
}
