import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

import { Card } from "reactstrap";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux'
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';
import { setSearchKeyword } from "../reducers/SetUserReducer";
import { Menu,MenuItem } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Axios from "../api/Axios";



const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen=(e)=>{
    setAnchorEl(e.currentTarget);
  };
  const handleMenuClose=()=>{
    setAnchorEl(null);
  };
  const navigationBar=[
    { id: 1, link:'view_profile',label:"View Profile", index: "1" },
    { id: 2, link: "logout",label:"Log Out", index: "2" },
  ]
  const navigate = useNavigate();
  const cartItemCount=useSelector((state)=>state.cartReducer.cartItemCount);
  const user = localStorage.getItem("type");
  const [role, setRole] = useState(""); // Initialize the state with an empty string
 //search bar
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      dispatch(setSearchKeyword(inputValue));
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

  return (
    <div>
    {user === "Customer" && (
      <nav className="navbar">
        <div className="container_1">
          <ul className="nav-links">
            <input
             text="text"
             value={inputValue}
             onChange={handleInputChange}
             onKeyDown={handleSearch}
             placeholder="Search Items..."/>

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