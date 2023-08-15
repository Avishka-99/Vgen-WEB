import React,{useState}from 'react';
import '../../styles/Admin/Home.css';
import DashBoardCard from '../../components/Card';

import TuneIcon from '@mui/icons-material/Tune';
import {PieChart,Pie,Sector,Cell,ResponsiveContainer} from 'recharts';
export default function StaffHome() {
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const data = [
		{ name: 'Evening', value: 700 ,COLORS:'#0088FE'},
		{ name: 'Morning', value: 200 ,COLORS:'#00C49F'},
		{ name: 'Lunch', value: 100,COLORS:'#FFBB28' },
	];
	const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
	const MostOrders = [	
		{ name: 'Bike', value: 1200 ,img:require('../../assets/images/bike.png')},
		{ name: '3-Wheel', value: 200 ,img:require('../../assets/images/3wheel.png') },
		{ name: 'Truck', value: 50,img:require('../../assets/images/truck.png') },
		{ name: 'Bike(normal)', value: 600 ,img:require('../../assets/images/bicycle.jpeg') },
	];
	
	const currentDate = new Date();
	const dayOfWeek = daysOfWeek[currentDate.getDay()];
	const dayOfMonth = currentDate.getDate();
	const month = months[currentDate.getMonth()];
	const year = currentDate.getFullYear();
    const onPieEnter = (data, index) => {
		this.setState({
		  activeIndex: index,		
		});
	};
	const [activeIndex, setActiveIndex] = useState(0);
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
					<DashBoardCard amount='13240' description='Total Products' />
					<DashBoardCard amount='1200' description='Total Restaurants' />
					<DashBoardCard amount='600' description='Delivery Riders' />
				</div>
				<div className='AdminRow_1Row4'>
					<div style={{width: '27.5%', fontFamily: 'poppins-bold', fontSize: 25, textAlign: 'center', alignItems: 'center'}}>
						<div style={{color: '#242730'}}>Delivery Payments</div>
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
								<th>Order Id</th>
								<th>Delivery Id</th>
								<th>Vehicle Type</th>
                <th>Order Value(Rs.)</th>
								<th>Delivery Payment (Rs.)</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>101</td>
								<td>Bike</td>
								<td>2000.00</td>
								<td>150.00</td>
                <td><button className='btn btn-primary'>Pay</button></td>
							</tr>
              <tr>
								<td>87</td>
								<td>102</td>
								<td>Bike</td>
								<td>500.00</td>
								<td>50.00</td>
                <td><button className='btn btn-primary'>Pay</button></td>
							</tr>
              <tr>
								<td>5</td>
								<td>106</td>
								<td>Truck</td>
								<td>34000.00</td>
								<td>1500.00</td>
                <td><button className='btn btn-primary'>Pay</button></td>
							</tr>
              <tr>
								<td>7</td>
								<td>301</td>
								<td>Bike</td>
								<td>500.00</td>
								<td>50.00</td>
                <td><button className='btn btn-primary'>Pay</button></td>
							</tr>
              <tr>
								<td>7</td>
								<td>56</td>
								<td>3-wheel</td>
								<td>5000.00</td>
								<td>450.00</td>
                <td><button className='btn btn-primary'>Pay</button></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className='Row_2'>
				<div className='AdminRow_2Row1'>
					<div  className='card_view'>
						<p className='vegan_type'>Delivery Vehicle type</p>
						<div className='card-container'>
							{MostOrders.map((data) => (
								<div className='card-most' key={data.restaurantId}>
									<div className='card-body'>
									<div className='card-img'>
									<img className='img3' src={data.img} alt={data.name} />
									</div>
									<div className='card-text'>
										<h5>{data.name}</h5>
										<p>{data.value} deliveries Completed</p>
										</div>
										</div>
										</div>
							))}	
					  
						
					</div>
					</div>
					</div>
					<div className='AdminRow_2Row2'>
    <h2>Delivery Process</h2>
	<div className='pie-chart-container1'>
		{data.map((entry, index) => (
            <div key={index} className='pie-chart'>
                <div className='pie-chart-title'>{entry.name}</div>
                <div className='pie-chart-color' style={{ backgroundColor: entry.COLORS }}></div>
            </div>

        ))}
		</div>
    <div className='pie-chart-container'>
    
      <PieChart height={250} width={400}>
            <Pie
                data={data}
                cx={190}
                cy={130}
                innerRadius={80}
                outerRadius={120}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
	
    </div>


</div>

			
		</div>
		 </div>
	);
}
