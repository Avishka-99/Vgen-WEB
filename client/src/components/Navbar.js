import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import getGeolocationAddress from "../views/customer/geoAddress";

import {setSearchKeyword} from "../reducers/SetUserReducer";
import { Card } from "reactstrap";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux'
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';

import { Menu,MenuItem } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Axios from 'axios';
import axios from "axios";
import SearchResults from "../views/customer/SearchResults";



const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [apiKey, setApiKey] = useState('AIzaSyDGf0EXb4I0BQoE2t_IsJmkOJXYTc0S5bA');
const [location, setLocation] = useState({});


const [formData_1,setFormData_1]=useState([]);

const [address, setAddress] = useState([]);
//get longitude and latitude in the backend "localhost:5001/api/getlocation using userId"
//set into address that is used in getLocationButton
useEffect(() => {
  const userId=localStorage.getItem("userId");

  const getLocation = async () => {
    try {
      const response = await Axios.get(
        `http://localhost:5001/api/getlocation/`,
        {
          params: {
            userId: userId,
          },
        }
      );
      const { latitude, longitude } = response.data;
      const address = await getGeolocationAddress(latitude,longitude,apiKey);
      console.log(latitude,longitude);
      localStorage.setItem("latitude",latitude);
      localStorage.setItem("longitude",longitude);
      console.log(address);
      setAddress(address);

    } catch (error) {
      console.error(error);
    }
  };
  getLocation();
},[]);
  const getLocationButton = () => {
   
      return (
        <div className="location" onClick={() => navigateTo("location")}>
        <div className="location-icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className="location-text">
      <p>{address}</p>  
        </div>
      </div>
      );
    
  };
  const handleMenuOpen=(e)=>{
    setAnchorEl(e.currentTarget);
  };
  const handleMenuClose=()=>{
    setAnchorEl(null);
  };
  const navigationBar=[
    { id: 1, link:'view_profile',label:"View Profile", index: "1" },
    { id: 2, link: "logout",label:"Log Out", index: "2" },
    {id: 3,  link: 'Recipe',label: 'recipe',  index: '3'},
    {id:4,link:'Orders',label:'Orders',index:'4'}
  ]
  const navigate = useNavigate();
  const cartItemCount=useSelector((state)=>state.cartReducer.cartItemCount);
  const user = localStorage.getItem("type");
  const [role, setRole] = useState(""); // Initialize the state with an empty string
 //search bar
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
 
const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = async () => {
   
      try {
        const response = await Axios.get(`http://localhost:5001/api/search`, {
          params: {
            search: inputValue,
          },
        });
  
        if (response.data) {
          console.log(response.data);
       
          dispatch(setSearchKeyword(response.data));
          navigateTo("SearchResults");
        }
      } catch (error) {
        console.error(error);
      }
    
  };
  
  ////
  useEffect(() => {
    // Set the role state with the user value from local storage
    setRole(user);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // const customer = [
  //   { id: 1, link: "home", index: "1" },
  //   { id: 2, link: "category", index: "2" },
  //   { id: 3, link: "restaurants", index: "3" },
  //   { id: 4, link: "community", index: "4" },
  //   { id: 5, link: "feed", index: "5" },
  //   { id: 6, link: "logout", index: "6" },
  // ];

  const navigateTo = (page) => {
    if (page === "logout") {
      localStorage.clear("type");
      setRole(""); // Clear the role state as well when logging out
    }
    navigate("/" + page);
  };
//search
const handleSearchChange = (e) => {
  Axios.get(`http://localhost:5001/api/search`, {
    params: {
      search: e.target.value,
    },
  }).then((response) => {
    if (response.data) {
      setSearchKeyword(response.data);
    }
  });
  setInputValue(e.target.value);
}


  return (
    <div>
    {user === "Customer" && (
      <nav className="navbar">
        <div className="container_1">
          <ul className="nav-links">
             <div
             style={
{
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}
             } onClick={()=>navigateTo("location")}>
              {getLocationButton()}
             </div>
             <input
        type="text"
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
/>
<button onClick={()=>handleSearch()}>Search</button>
    
                
            
            <div  onClick={()=>navigateTo("Cart")}><ShoppingCartIcon/><sup>{cartItemCount}</sup></div>

            {/* {customer.map((item) => (
              <li key={item.id}>
                <Link to={item.link} onClick={() => navigateTo(item.link)}>
                  {item.link}
                </Link>
              </li>
            ))} */}
            <div onClick={handleMenuOpen}>
              <MoreVertIcon/>
            </div>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              >
              {navigationBar.map((item) => (
                <MenuItem key={item.id} onClick={() => navigateTo(item.link)}>{item.label}</MenuItem>
              ))}

              </Menu>
          </ul>
        </div>
      </nav>
    )}
  </div>
  );
};




export default Navbar;