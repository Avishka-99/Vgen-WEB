import React, {useEffect, useState} from 'react';
import MenuItem from './MenuItem';
import '../styles/Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import WindowIcon from '@mui/icons-material/Window';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import PeopleIcon from '@mui/icons-material/People';
import AddHomeIcon from '@mui/icons-material/AddHome';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import LogoutIcon from '@mui/icons-material/Logout';
import EuroIcon from '@mui/icons-material/Euro';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import GradingIcon from '@mui/icons-material/Grading';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
const ShowSidebar = (props) => {
	const navigate = useNavigate();
	var user = localStorage.getItem('type');
	const [role, setRole] = useState('delivery');
	const [Active, setActive] = useState(1);
	/*useEffect(() => {
    navigate('/order');
  })*/
	//console.log(user);
	const customer = [
		{id: 1, icon: <HomeIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'home', index: '1'},
		{id: 2, icon: <WindowIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'category', index: '2'},
		{id: 3, icon: <StoreIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'restaurants', index: '3'},
		{id: 4, icon: <PeopleIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'community', index: '4'},
		{id: 5, icon: <DynamicFeedIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'feed', index: '5'},
		{id: 6, icon: <LogoutIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'logout', index: '6'},
	];
	const restaurant = [
		{id: 1, icon: <HomeIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'home', index: '1'},
		{id: 2, icon: <FastfoodIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'products', index: '2'},
		{id: 3, icon: <GradingIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'orders', index: '3'},
		{id: 4, icon: <EventSeatIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'reservation', index: '4'},
		{id: 5, icon: <ShoppingCartIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'shopping', index: '5'},
		{id: 6, icon: <LogoutIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'logout', index: '6'},
	];
	const admin = [
		{id: 1, icon: <HomeIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'home', index: '1'},
		{id: 2, icon: <GroupsIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'staff', index: '2'},
		{id: 3, icon: <TrendingUpIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'analytics', index: '3'},
		{id: 4, icon: <DirectionsBikeIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'riders', index: '4'},
		{id: 5, icon: <AccountCircleIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'profile', index: '5'},
		{id: 6, icon: <LogoutIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'logout', index: '6'},
	];
	const staff = [
		{id: 1, icon: <HomeIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'home', index: '1'},
		{id: 2, icon: <EuroIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'payments', index: '2'},
		{id: 3, icon: <RecordVoiceOverIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'complains', index: '3'},
		{id: 4, icon: <AccountCircleIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'profile', index: '4'},
		{id: 5, icon: <LogoutIcon sx={{fontSize: 40, fill: '#6F767F'}} />, link: 'logout', index: '5'},
	];
	//console.log(restaurant[0].icon.props.sx.fontSize)
	const navigateTo = (page, index) => {
		setActive(index);
		if (page == 'logout') {
			setActive(1);
			localStorage.clear('type');
		}
		navigate('/' + page); /* /home */
	};
	if (props.type == 'Admin') {
		return (
			<div className='sidebar' onSelect={(item) => console.log(item)}>
				<div>
					{admin.map((item) => (
						<MenuItem key={item.id} icon={item.icon} fun={navigateTo} link={item.link} index={item.index} active={Active} />
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
