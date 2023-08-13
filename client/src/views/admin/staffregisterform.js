import React, {useState} from 'react';
import '../../styles/Admin/staffregisterform.css';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import * as ToastMessages from '../../components/ToastMessages';
import Toast from '../../components/Toast';
const StaffRegistrationForm = ({onClose}) => {
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [contactNo, setContactNo] = useState('');
	const [nic, setNic] = useState('');
	const [password, setPassword] = useState('');
	const [confirmpassword, setConfirmPassword] = useState('');
	const [isDisabled, setIsDisabled] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmpassword) {
			alert('Password and Confirm Password are not matching');
			return;
		}
		const data = {
			email,
			firstName,
			lastName,
			contactNo,
			nic,
			password,
			userRole: 'Staff',
		};
		try {
			const response = await Axios.post(API_ENDPOINTS.SIGNUP_URL, data);
			console.log(response);
			alert('Staff Registered Successfully');
			onClose();
		} catch (error) {
			console.log(error);
			alert('Staff Registration Failed');
		}
	};

	return (
		<div className='staff-registration-form'>
			<div className='img-div'>
				<img src='https://www.w3schools.com/howto/img_avatar.png' alt='Avatar' className='avatar' />
			</div>
			<div className='form-div'>
				<h2>Register Staff</h2>
				<p>Please fill in this form to create an account.</p>
				<hr />
				<form onSubmit={handleSubmit}>
					<label>Email:</label>
					<input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />

					<label>First Name:</label>
					<input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

					<label>Last Name:</label>
					<input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} required />

					<label>Contact No:</label>
					<input type='tel' value={contactNo} onChange={(e) => setContactNo(e.target.value)} required />

					<label>NIC:</label>
					<input type='text' value={nic} onChange={(e) => setNic(e.target.value)} required />

					<label>Password*</label>
					<input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
					<label>Confirm Password*</label>
					<input type='password' value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
					<button type='submit'>Register</button>
				</form>
			</div>
		</div>
	);
};

export default StaffRegistrationForm;
