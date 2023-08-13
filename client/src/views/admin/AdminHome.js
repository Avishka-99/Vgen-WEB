import React from 'react';
import '../../styles/Admin/Home.css';
import DashBoardCard from '../../components/Card';
import TuneIcon from '@mui/icons-material/Tune';
export default function AdminHome() {
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const currentDate = new Date();
	const dayOfWeek = daysOfWeek[currentDate.getDay()];
	const dayOfMonth = currentDate.getDate();
	const month = months[currentDate.getMonth()];
	const year = currentDate.getFullYear();

	const formattedDate = `${dayOfWeek} ${dayOfMonth.toString().padStart(2, '0')} ${month} ${year}`;
	return (
		<div className='AdminContainer'>
			{/* <img src={require('../../assets/images/vf-bg.png')} className='Admin_bg' /> */}
			{/* <div className='AdminWrapContainer'> */}
			<div className='Row_1'>
				<div className='AdminRow_1Row1'>
					<div style={{marginLeft: '2%', fontFamily: 'poppins-semibold', fontSize: 32}}>VGen Dashboard</div>
					<div style={{width: '15%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
						<div style={{width: 53, height: '96%', borderRadius: '10em', backgroundColor: 'rgb(42, 165, 159)'}}></div>
						<div style={{width: 53, height: '96%', borderRadius: '10em', backgroundColor: 'rgb(42, 165, 159)'}}></div>
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
								<td>Dewmini</td>
								<td>101</td>
								<td>Delivery</td>
								<td>COD</td>
								<td>Preparing</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className='Row_2'></div>
		</div>
		// </div>
	);
}
