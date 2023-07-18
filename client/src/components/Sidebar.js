import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem';
import '../styles/Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import WindowIcon from '@mui/icons-material/Window';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import PeopleIcon from '@mui/icons-material/People';
import AddHomeIcon from '@mui/icons-material/AddHome';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
const ShowSidebar = () => {
  const navigate = useNavigate();
  var user = localStorage.getItem('type')
  const [role, setRole] = useState("delivery");
  /*useEffect(() => {
    navigate('/order');
  })*/
  //console.log(user);
  const customer = [
    { id: 1, icon: <HomeIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "home", index: "1" },
    { id: 2, icon: <WindowIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "category", index: "2" },
    { id: 3, icon: <StoreIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "restaurants", index: "3" },
    { id: 4, icon: <PeopleIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "community", index: "4" },
    { id: 5, icon: <DynamicFeedIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "feed", index: "5" },
    { id: 6, icon: <AccountCircleIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "logout", index: "5" },
  ];
  const restaurant = [
    { id: 1, icon: <HomeIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "home", index: "1" },
    { id: 2, icon: <FastfoodIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "products", index: "2" },
    { id: 3, icon: <AccountCircleIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "logout", index: "3" },
  ];
  const navigateTo = (page) => {
    if (page == "logout") {
      localStorage.clear("type");
    }
    navigate('/' + page);
  }
  return (
    <div className='sidebar' onSelect={(item) => console.log(item)}>
      <div>
        {user == "Customer" ? customer.map((item) => (
          <MenuItem key={item.id} icon={item.icon} fun={navigateTo} link={item.link} index={item.index} />
        )) : user == "resturantManager" ? restaurant.map((item) => (
          <MenuItem key={item.id} icon={item.icon} fun={navigateTo} link={item.link} index={item.index} />
        )) : <div></div>}
      </div>

    </div>
  )
}
export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      {/* <div onClick={toggleSidebar} className='sidebarButton'>Hello</div> */}
      {showSidebar && <ShowSidebar />}
    </>
  )
}