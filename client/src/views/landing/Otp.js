// this is the sign in page
import React, {useState, useEffect} from 'react';
import '../../styles/Otp.css';
import {json, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {SetUserAction} from '../../actions/SetUserAction';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import OtpInput from 'react-otp-input';
import * as ToastMessages from '../../components/ToastMessages';
import Toast from '../../components/Toast';
//import Axios from 'axios';
export default function Otp() {
	const [otp, setOtp] = useState('');
	const dispatch = useDispatch();
	const [mail, setMail] = useState('');
	const navigate = useNavigate();
	useEffect(() => {
		var user = localStorage.getItem('type');
		var otpmail = localStorage.getItem('otpemail');
		//setMail(otpmail);
		if (!otpmail) {
			navigate('/');
		} else {
			setMail(otpmail);
		}
		//console.log("Landing");
	}, []);
	const navigateTo = (page) => {
		if (page == 'home') {
			navigate('');
		} else {
			navigate('/' + page);
		}
	};
	const handleSubmit = (e) => {
		console.log(otp);
		Axios.post(API_ENDPOINTS.verifyUser_URL, {
			email: mail,
			otp: otp,
		}).then((response) => {
			if (response.data == 'OTP matched') {
				ToastMessages.success('Account verified successfully');
				ToastMessages.info('Redirecting to homepage');
				localStorage.removeItem('otpemail');
				setTimeout(function () {
					navigate('/');
				}, 3000);
			} else if (response.data == 'Invalid OTP') {
				ToastMessages.error('Invalid OTP');
				setOtp('');
			}
			console.log(response.data);
			// if (response.data.type) {
			// 	dispatch(SetUserAction(response.data.type));
			// 	localStorage.setItem('token', response.data.token);
			// 	navigate('/home');
			// } else {
			// 	return;
			// }
		});
		//e.preventDefault();
		//console.log(e.target[0].value);
	};
	return (
		<div className='OtpContainer'>
			<div className='OtpleftContainer'></div>
			<div className='OtpRightContainer'>
				<div className='OtpForm'>
					<div className='Slogan'>Secure Your Vegan Journey</div>
					<div className='Logintitle'>Verify with OTP</div>
					<div className='OtpDescription'>
						Enter the OTP sent to{' '}
						<span className='otpEmail' style={{color: 'black'}}>
							{mail}
						</span>
					</div>
					<div className='otpInputBoxes'>
						<OtpInput
							value={otp}
							onChange={setOtp}
							numInputs={6}
							renderSeparator={<span style={{marginRight: '3%'}}></span>}
							renderInput={(props) => <input {...props} />}
							inputStyle={{width: '5.5%', height: '40px', outline: '2px solid #7EB693', borderRadius: '5px', border: '0', fontSize: '20px', fontFamily: 'poppins-regular'}}
						/>
					</div>
					<div style={{marginTop: '5%', fontFamily: 'poppins-regular'}} className='OtpDescription'>
						Didn't receive the OTP ?{' '}
						<span className='otpEmail' style={{color: '#007074'}}>
							Resend OTP
						</span>
					</div>

					<div className='OtpRow'>
						<div className='btn_login' style={{width: '20%'}} onClick={handleSubmit}>
							Verify
							<div className='arrowCircle'></div>
						</div>
					</div>
				</div>
			</div>
			<Toast duration={3000} />
		</div>
	);
}
