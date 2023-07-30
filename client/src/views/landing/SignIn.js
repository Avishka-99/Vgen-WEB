// this is the sign in page
import React, {useState, useEffect} from 'react';
import '../../styles/SignIn.css';
import {json, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {SetUserAction} from '../../actions/SetUserAction';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import googleiMG from '../../assets/icons/google.png';
import facebookiMG from '../../assets/icons/facebook.png';
import * as ToastMessages from '../../components/ToastMessages';
import Toast from '../../components/Toast';
export default function SignIn() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	var user = localStorage.getItem('type');
	const navigate = useNavigate();
	useEffect(() => {
		if (user) {
			navigate('/home');
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
	const resetFormData = () => {
		setEmail('');
		setPassword('');
	};
	const handleSubmit = (e) => {
		Axios.post(API_ENDPOINTS.SIGNIN_URL, {
			email: email,
			password: password,
		}).then((response) => {
			console.log(response);
			if (response.data.type) {
				dispatch(SetUserAction(response.data.type));
				localStorage.setItem('token', response.data.token);
				localStorage.setItem('userId', JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userId);
				navigate('/home');
				//window.location.reload(true);
			} else if (response.data == 'Not verified') {
				ToastMessages.warning('Please verify your account');
				ToastMessages.info('Redirectiong to OTP verification');
				localStorage.setItem('otpemail', email);
				setTimeout(function () {
					navigate('/otp');
				}, 3000);
			} else {
				ToastMessages.error(response.data);
			}
			//console.log(response.data);
		});
		//e.preventDefault();
		//console.log(e.target[0].value);
	};
	return (
		<div className='SignInContainer'>
			<div className='SignInleftContainer'></div>
			<div className='SignInRightContainer'>
				<div className='SignInForm'>
					<div className='Slogan'>Embrace Your Vegan Journey</div>
					<div className='Logintitle'>Login And Connect!</div>
					<input style={{marginTop: '15%'}} className='signInInput' type='text' autoComplete='off' onChange={(event) => setEmail(event.target.value)} required></input>
					<label className='placeholder'>Email*</label>
					<input className='signInInput' type='password' onChange={(event) => setPassword(event.target.value)} required></input>
					<label className='placeholder'>Password*</label>
					<div className='checkBoxAndPswdForget'>
						<div className='row_1'>
							<input type='checkbox' className='checkbox'></input>
							<label className='rememberMe'>Remember me</label>
						</div>
						<div className='row_1'>
							<label className='forgotPassword'>
								Forgot Password?
								<div className='clickHereLink' onClick={() => navigateTo('reset')}>
									{' '}
									Click Here
								</div>
							</label>
						</div>
					</div>
					<div className='signInRow'>
						<div className='btn_login' onClick={handleSubmit}>
							Login
							<div className='arrowCircle'></div>
						</div>
					</div>
					{/* <div className='signInRow' style={{ marginTop: "2%" }}>
                        <div style={{
                            fontFamily: "poppins-medium",
                            fontSize: "32px",
                            color: "#274C5B"

                        }}>
                            OR
                        </div>
                    </div>
                    <div className='signInRowLast' style={{ marginTop: "2%" }}>
                        <div className='signInWIthGooFb'>
                            <div className='signInImage' style={{ backgroundImage: "url(" + googleiMG + ")" }}></div>
                            <div className='signInText'>Login with Google</div>
                        </div>
                        <div className='signInWIthGooFb'>
                            <div className='signInImage' style={{ backgroundImage: "url(" + facebookiMG + ")" }}></div>
                            <div className='signInText'>Login with Facebook</div>
                        </div>
                    </div> */}
				</div>
			</div>
			<Toast duration={3000} />
		</div>
	);
}
