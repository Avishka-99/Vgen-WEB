import React from 'react';
import '../../styles/Admin/Home.css';
import DashBoardCard from '../../components/Card';

import TuneIcon from '@mui/icons-material/Tune';
import {PieChart, Pie, Sector, Cell, ResponsiveContainer} from 'recharts';
export default function AdminHome() {
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const data = [
		{ name: 'Highly Satisfied', value: 400 ,COLORS:'#0088FE'},
		{ name: 'Satisfied', value: 300 ,COLORS:'#00C49F'},
		{ name: 'Slightly Satisfied', value: 300,COLORS:'#FFBB28' },
	];
	const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
	const MostOrders = [	
		{ name: 'Keells', value: 400 ,img:require('../../assets/images/keells.png')},
		{ name: 'Green Spoon', value: 300 ,img:require('../../assets/images/greenspoon.jpg') },
		{ name: 'VEGAN FOOD', value: 300,img:require('../../assets/images/vegan_food.jpg') },
		{ name: 'The Green Bowl', value: 200 ,img:require('../../assets/images/green.png') },
	];
	
	const currentDate = new Date();
	const dayOfWeek = daysOfWeek[currentDate.getDay()];
	const dayOfMonth = currentDate.getDate();
	const month = months[currentDate.getMonth()];
	const year = currentDate.getFullYear();
	const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
	const MostOrders = [
		{name: 'KFC', value: 400, img: require('../../assets/images/kfc.jpg')},
		{name: 'Pizza Hut', value: 300, img: require('../../assets/images/pizzahut.jpg')},
		{name: 'Dominos', value: 300, img: require('../../assets/images/dominos.jpg')},
		{name: 'Burger King', value: 200, img: require('../../assets/images/burgerking.jpg')},
	];
	const data = [
		{name: 'Highly Satisfied', value: 400, COLORS: '#0088FE'},
		{name: 'Satisfied', value: 300, COLORS: '#00C49F'},
		{name: 'Slightly Satisfied', value: 300, COLORS: '#FFBB28'},
	];
	const onPieEnter = (data, index) => {
		this.setState({
			activeIndex: index,
		});
	};
	const [activeIndex, setActiveIndex] = React.useState(0);
	const onMouseEnter = (data, index) => {
		setActiveIndex(index);
	};
	const formattedDate = `${dayOfWeek} ${dayOfMonth.toString().padStart(2, '0')} ${month} ${year}`;
	return (
		<div className='AdminContainer'>
			{/* <img src={require('../../assets/images/vf-bg.png')} className='Admin_bg' /> */}
			{/* <div className='AdminWrapContainer'> */}
			<div className='Row_1'>
				<div className='AdminRow_1Row1'>
		
					<div style={{width: '15%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
						
					</div>
				</div>
				<div className='AdminRow_1Row2'>
					<div style={{marginLeft: '2%', fontFamily: 'poppins-semibold', fontSize: 19, color: 'black', opacity: 0.5}}>{formattedDate}</div>
				</div>
				<div className='AdminRow_1Row3'>
					<DashBoardCard amount='Rs.150,342' description='Total sales' />
					<DashBoardCard amount='Rs.120,334' description='Total revenue' />
					<DashBoardCard amount='Rs.119,235' description='Total expenses' />
				</div>
				<div className='AdminRow_1Row4'>
					<div style={{width: '27.5%', fontFamily: 'poppins-bold', fontSize: 25, textAlign: 'center', alignItems: 'center'}}>
						<div style={{color: '#242730'}}> Recent Orders</div>
					</div>
					<div style={{display: 'flex', flexDirection: 'row', width: '16%', height: '80%', backgroundColor: '#BCDAC8', borderRadius: 15, marginRight: '3.6%', alignItems: 'center', justifyContent: 'space-around'}}>
						<div style={{height: '100%', display: 'flex', alignItems: 'center'}}>
							<TuneIcon />
						</div>
						<div style={{height: '100%', display: 'flex', alignItems: 'center', fontFamily: 'poppins-medium'}}>Filter Order</div>
					</div>
				</div>
				<div className='AdminRow_1Row5'>
					<table>
						<thead>
							<tr>
								<th>Customer ID</th>
								<th>Order ID</th>
								<th>Order Type</th>
								<th>Payment</th>
								<th>Order Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Dewmini</td>
								<td>101</td>
								<td>Delivery</td>
								<td>COD</td>
								<td>Preparing</td>
							</tr>
							<tr>
								<td>Janadi</td>
								<td>103</td>
								<td>Delivery</td>
								<td>COD</td>
								<td>Preparing</td>
							</tr>
							<tr>
								<td>Tharindu</td>
								<td>104</td>
								<td>Delivery</td>
								<td>COD</td>
								<td>Preparing</td>
							</tr>
							<tr>
								<td>Tharindu</td>		
								<td>104</td>
								<td>Delivery</td>
								<td>COD</td>
								<td>Preparing</td>
							</tr>
							<tr>
								<td>Tharindu</td>
								<td>104</td>
								<td>Delivery</td>
								<td>COD</td>
								<td>Preparing</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className='Row_2'>
				<div className='AdminRow_2Row2'>
					<h2>Customer Review</h2>
					<div className='pie-chart-container1'>
						{data.map((entry, index) => (
							<div key={index} className='pie-chart'>
								<div className='pie-chart-title'>{entry.name}</div>
								<div className='pie-chart-color' style={{backgroundColor: entry.COLORS}}></div>
							</div>
						))}
					</div>
					<div className='pie-chart-container'>
						<PieChart height={250} width={400}>
							<Pie data={data} cx={190} cy={130} innerRadius={80} outerRadius={100} fill='#8884d8' paddingAngle={5} dataKey='value'>
								{data.map((entry, index) => (
									<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
								))}
							</Pie>
						</PieChart>
					</div>
				</div>
			</div>
		</div>
		 </div>
	);
}
