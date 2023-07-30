// import React, { useEffect, useState } from 'react'
// import MenuItem from './MenuItem';
// import '../styles/Sidebar.css'
// import HomeIcon from '@mui/icons-material/Home';
// import StoreIcon from '@mui/icons-material/Store';
// import WindowIcon from '@mui/icons-material/Window';
// import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import PeopleIcon from '@mui/icons-material/People';
// import AddHomeIcon from '@mui/icons-material/AddHome';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle'
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux'

// import GradingIcon from '@mui/icons-material/Grading';
// import EventSeatIcon from '@mui/icons-material/EventSeat';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// const ShowSidebar = () => {
//   const navigate = useNavigate();
//   const[isOpen,setIsOpen]=useState(false);
//   const toggle=()=>setIsOpen(!isOpen);
//   var user = localStorage.getItem('type')
//   const [role, setRole] = useState("delivery");
//   /*useEffect(() => {
//     navigate('/order');
//   })*/
//   //console.log(user);
//   const customer = [
//     { id: 1, icon: <HomeIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "home", index: "1", name:"Home" },
//     { id: 2, icon: <WindowIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "category", index: "2" ,name:"Category" },
//     { id: 3, icon: <StoreIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "restaurants", index: "3" ,name:"Restaurants" },
//     { id: 4, icon: <PeopleIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "community", index: "4",name:"Community" },
//     { id: 5, icon: <DynamicFeedIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "feed", index: "5",name:"Feeds" },
//     { id: 6, icon: <AccountCircleIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "logout", index: "5",name:"Logout" },
//   ];
//   const restaurant = [
//     { id: 1, icon: <HomeIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "home", index: "1" },
//     { id: 2, icon: <FastfoodIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "products", index: "2" },
//     { id: 3, icon: <GradingIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "orders", index: "3" },
//     { id: 4, icon: <EventSeatIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "reservation", index: "4" },
//     { id: 5, icon: <ShoppingCartIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "shopping", index: "5" },
//     { id: 6, icon: <AccountCircleIcon sx={{ fontSize: 40, fill: "#6F767F" }} />, link: "logout", index: "6" },
//   ];
//   const navigateTo = (page) => {
//     if (page == "logout") {
//       localStorage.clear("type");
//     }
//     navigate('/' + page);
//   }
//   return (
    
// <div style={{width:isOpen ? "200px":"50px"}} className='sidebar' onSelect={(item) => console.log(item)}>

// {user === "Customer" &&  (
//     <div style={{width:isOpen ? "200px":"50px"}}>
//       <div
//   onClick={toggle}
//   style={{
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer",
//     width: "50px",
//     height: "50px",
//     backgroundColor: "#6F767F",
//     // Add other styles as needed
//   }}
// >
//   <MenuOutlinedIcon />
  
// </div>
//       {customer.map((item) => (
//         <MenuItem  key={item.id} icon={item.icon} fun={navigateTo} link={item.link} name={item.name} index={item.index}/>
      
//       ))}
//     </div>
//   )}

//   {user === "resturantManager" &&  (
//     <div style={{width:isOpen ? "300px":"50px"}}>
//       <div
//   onClick={toggle}
//   style={{
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer",
//     width: "50px",
//     height: "50px",
//     backgroundColor: "#6F767F",
//     // Add other styles as needed
//   }}
// >
//   <MenuOutlinedIcon />
  
// </div>
//       {restaurant.map((item) => (
//         <MenuItem key={item.id} icon={item.icon} fun={navigateTo} link={item.link}  index={item.index} ></MenuItem>
//       ))}
//     </div>
//   )}
// </div>


//   )
// }
// export default function Sidebar() {
//   const [showSidebar, setShowSidebar] = useState(true);

//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };
//   return (
//     <>
//       {/* <div onClick={toggleSidebar} className='sidebarButton'>Hello</div> */}
//       {showSidebar && <ShowSidebar />}
//     </>
//   )
// }