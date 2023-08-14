import React, {useEffect, useState} from 'react';
import StaffRegistrationForm from './staffregisterform';
import '../../styles/Admin/Staff.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import Axios from '../../api/Axios';
export default function Staff() {
	const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

	const openRegistrationForm = () => {
		setIsRegistrationOpen(true);
	};

	const closeRegistrationForm = () => {
		setIsRegistrationOpen(false);
	};
	useEffect(() => {
		Axios.post(API_ENDPOINTS.FETCH_ALL_STAFF).then((response) => {
			console.log(response.data);
		});
	},[]);

	return (
		<div className='AdminStaffWindowContainer'>
			<div className='AdminStaffRow_1'>
				<div style={{marginLeft: '2%', fontFamily: 'poppins-semibold', fontSize: 32}}>VGen Staff</div>
				<div style={{width: '42%'}}></div>
				<div onClick={openRegistrationForm} className='AdminStaffAddButton'>
					<div>
						<AddCircleOutlineIcon sx={{fontSize: 40, color: 'white'}} />
					</div>
					<div style={{fontFamily: 'poppins-semibold', fontSize: 25, color: 'white'}}>Add New</div>
				</div>
			</div>
			<div className='AdminStaffRow_2'>
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
			{isRegistrationOpen && (
				<div className='modal'>
					<div className='modal-content' style={{width: '70%'}}>
						<span className='close' onClick={closeRegistrationForm}>
							<CloseIcon />
						</span>
						<StaffRegistrationForm onClose={closeRegistrationForm} />
					</div>
				</div>
			)}
		</div>
		// <div>
		//   <h1>Staff</h1>
		//   <h1>staffRegister</h1>
		//   <button onClick={openRegistrationForm}>Register Staff</button>

		//   {isRegistrationOpen && (
		//     <div className="modal">
		//       <div className="modal-content">
		//         <span className="close" onClick={closeRegistrationForm}>
		//           &times;
		//         </span>
		//         <StaffRegistrationForm onClose={closeRegistrationForm} />
		//       </div>
		//     </div>
		//   )}
		// </div>
	);
}
