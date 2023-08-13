import React, {useEffect, useState} from 'react';
import MenuItem from './MenuItem';
import '../styles/Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import WindowIcon from '@mui/icons-material/Window';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import PeopleIcon from '@mui/icons-material/People';
import AddHomeIcon from '@mui/icons-material/AddHome';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import LogoutIcon from '@mui/icons-material/Logout';
import EuroIcon from '@mui/icons-material/Euro';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { FcAbout } from "react-icons/fc";

import GradingIcon from '@mui/icons-material/Grading';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
const ShowSidebar = (props) => {
	const navigate = useNavigate();
	var user = localStorage.getItem('type');
	const [role, setRole] = useState('delivery');
	const [Active, setActive] = useState(1);
	const [expanded, setExpanded] = useState(true);
	const toggleSidebar = () => {
		setExpanded(!expanded);
	};
	/*useEffect(() => {
    navigate('/order');
  })*/
	//console.log(user);
	const customer = [
		{id: 1, icon: <HomeIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Home', link: 'home', index: '1'},
		{id: 2, icon: <WindowIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Category', link: 'category', index: '2'},
		{id: 3, icon: <StoreIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Restaurants', link: 'restaurants', index: '3'},
		{id: 4, icon: <PeopleIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Community', link: 'community', index: '4'},
		{id: 5, icon: <DynamicFeedIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Feeds', link: 'feed', index: '5'},
		{id: 6, icon: <InfoIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'About', link: 'About', index: '6'},
	];
	const restaurant = [
		{id: 1, icon: <HomeIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Home', link: 'home', index: '1'},
		{id: 2, icon: <FastfoodIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Products', link: 'products', index: '2'},
		{id: 3, icon: <GradingIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Orders', link: 'orders', index: '3'},
		{id: 4, icon: <EventSeatIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Reservation', link: 'reservation', index: '4'},
		{id: 5, icon: <ShoppingCartIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Shopping', link: 'shopping', index: '5'},
		{id: 6, icon: <EditCalendarIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'complains', link: 'Restaurant_complain', index: '6'},
		{id: 7, icon: <LogoutIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'LogOut', link: 'logout', index: '7'},
	];
	const admin = [
		{id: 1, icon: <HomeIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'home', index: '1'},
		{id: 2, icon: <GroupsIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'staff', index: '2'},
		{id: 3, icon: <TrendingUpIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'analytics', index: '3'},
		{id: 4, icon: <DirectionsBikeIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'riders', index: '4'},
		{id: 5, icon: <AccountCircleIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'profile', index: '5'},
		{id: 6, icon: <LogoutIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'logout', index: '6'},
		{id: 7, icon: <AddHomeIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'staffRegister', index: '7'},
	];
	const staff = [
		{id: 1, icon: <HomeIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'home', index: '1'},
		{id: 2, icon: <EuroIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'payments', index: '2'},
		{id: 3, icon: <RecordVoiceOverIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'complains', index: '3'},
		{id: 4, icon: <AccountCircleIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'profile', index: '4'},
		{id: 5, icon: <LogoutIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'logout', index: '5'},
	];
	const manufacture = [
		{id: 1, icon: <HomeIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Home', link: 'home', index: '1'},
		{id: 2, icon: <FastfoodIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Products', link: 'row_products', index: '2'},
		{id: 3, icon: <GradingIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Orders', link: 'row_orders"', index: '3'},
		{id: 4, icon: <EditCalendarIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'complains', link: 'row_complains', index: '4'},
		{id: 5, icon: <LogoutIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'LogOut', link: 'logout', index: '6'},
	];
	//console.log(restaurant[0].icon.props.sx.fontSize)
	const navigateTo = (page, index) => {
		setActive(index);
		if (page == 'logout') {
			setActive(1);
			localStorage.clear('type');
		}
		navigate('/' + page);
	};
	if (props.type == 'Admin') {
		return (
			<div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`} onSelect={(item) => console.log(item)}>
				<div className='expand-toggle' onClick={toggleSidebar}>
					{expanded ? <MenuOutlinedIcon /> : <MenuOutlinedIcon />}
				</div>
				<div>
					{admin.map((item) => (
						<MenuItem key={item.id} icon={item.icon} labelMargin={expanded ? {marginLeft: '10%'} : {marginLeft: '0%'}} label={expanded ? item.label : null} style={expanded ? {justifyContent: 'flex-start', marginLeft: '15%'} : {justifyContent: 'center'}} fun={navigateTo} link={item.link} index={item.index} active={Active} />
					))}
				</div>
			</div>
		);
	} else if (props.type == 'Staff') {
		return (
			<div className='sidebar' onSelect={(item) => console.log(item)}>
				<div>
					{staff.map((item) => (
						<MenuItem key={item.id} icon={item.icon} fun={navigateTo} link={item.link} index={item.index} active={Active} />
					))}
				</div>
			</div>
		);
	} else if (props.type == 'Customer') {
		return (
			<div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`} onSelect={(item) => console.log(item)}>
				<div className='expand-toggle' onClick={toggleSidebar}>
					{expanded ? <MenuOutlinedIcon /> : <MenuOutlinedIcon />}
				</div>
				<div>
					{customer.map((item) => (
						<MenuItem key={item.id} icon={item.icon} labelMargin={expanded ? {marginLeft: '10%'} : {marginLeft: '0%'}} label={expanded ? item.label : null} style={expanded ? {justifyContent: 'flex-start', marginLeft: '15%'} : {justifyContent: 'center'}} fun={navigateTo} link={item.link} index={item.index} active={Active} />
					))}
				</div>
			</div>
		);
	} else if (props.type == 'resturantManager') {
		return (
			<div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`} onSelect={(item) => console.log(item)}>
				<div className='expand-toggle' onClick={toggleSidebar}>
					{expanded ? <MenuOutlinedIcon /> : <MenuOutlinedIcon />}
				</div>
				<div>
					{restaurant.map((item) => (
						<MenuItem key={item.id} icon={item.icon} labelMargin={expanded ? {marginLeft: '10%'} : {marginLeft: '0%'}} label={expanded ? item.label : null} style={expanded ? {justifyContent: 'flex-start', marginLeft: '15%'} : {justifyContent: 'center'}} fun={navigateTo} link={item.link} index={item.index} active={Active} />
					))}
				</div>
			</div>
		);
	 
	} else if (props.type == 'productManufacture') {
		return (
			<div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`} onSelect={(item) => console.log(item)}>
				<div className='expand-toggle' onClick={toggleSidebar}>
					{expanded ? <MenuOutlinedIcon /> : <MenuOutlinedIcon />}
				</div>
				<div>
					{manufacture.map((item) => (
						<MenuItem key={item.id} icon={item.icon} labelMargin={expanded ? {marginLeft: '10%'} : {marginLeft: '0%'}} label={expanded ? item.label : null} style={expanded ? {justifyContent: 'flex-start', marginLeft: '15%'} : {justifyContent: 'center'}} fun={navigateTo} link={item.link} index={item.index} active={Active} />
					))}
				</div>
			</div>
		);
	} 
	
};
export default function Sidebar(props) {
	const [showSidebar, setShowSidebar] = useState(true);

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};
	return (
		<>
			{/* <div onClick={toggleSidebar} className='sidebarButton'>Hello</div> */}
			{showSidebar && <ShowSidebar type={props.type} />}
		</>
	);
}
