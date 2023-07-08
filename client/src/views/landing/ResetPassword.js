// this is the sign in page
import React, { useState, useEffect } from 'react'
import '../../styles/Resetpassword.css'
import { json, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SetUserAction } from '../../actions/SetUserAction';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import googleiMG from '../../assets/icons/google.png';
import facebookiMG from '../../assets/icons/facebook.png'
//import Axios from 'axios';
export default function ResetPassword() {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    var user = localStorage.getItem('type')
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate('/home');
        }
        //console.log("Landing");
    }, [])
    const navigateTo = (page) => {
        if (page == "home") {
            navigate('');
        } else {
            navigate('/' + page);
        }
    }
    const handleSubmit = (e) => {
        Axios.post(API_ENDPOINTS.SIGNIN_URL, {
            email: email,
            password: password,
        }).then((response) => {
            if (response.data.type) {
                dispatch(SetUserAction(response.data.type));
                localStorage.setItem('token', response.data.token);
                navigate('/home');
                //window.location.reload(true);
            } else {
                return
            }
            //console.log(response.data);
        });
        //e.preventDefault();
        //console.log(e.target[0].value);


    }
    return (
        <div className='ResetContainer'>
            <div className='ResetleftContainer'></div>
            <div className='ResetRightContainer'>
                <div className='ResetForm'>
                    <div className='Slogan'>Rediscover Your Vegan Path</div>
                    <div className='Logintitle'>Reset Your Password</div>
                    <div className='resetDescription'>Please enter the email address used to register your account,</div>
                    <div className='resetDescription'>and we will email you an OTP to reset password.</div>
                    <input style={{ marginTop: "15%" }} className='ResetInput' type="text" autoComplete="off" onChange={(event) => setEmail(event.target.value)} required></input>
                    <label className='placeholder_reset'>Email*</label>
                    <div className='ResetRow'>
                        <div className='btn_login' onClick={handleSubmit}>
                            Get OTP
                            <div className='arrowCircle'></div>
                        </div>
                    </div>
                    <div style={{ marginTop: "5%", fontFamily: "poppins-regular" }} className='resetDescription'>If you are having difficulty with this process, please <span className="contactUS" style={{ color: "#007074" }}>contact us</span></div>
                    <div className='ResetRow' style={{ marginTop: "1%", height: "6%" }}>
                        <div style={{
                            fontFamily: "poppins-medium",
                            fontSize: "32px",
                            color: "#274C5B"

                        }}>
                            OR
                        </div>
                    </div>
                    <div className='ResetRow' style={{ marginTop: "1%", height: "5%" }}>
                        <div style={{
                            fontFamily: "poppins-medium",
                            fontSize: "20px",
                            color: "#4D5959"

                        }}>
                            Not a member?
                        </div>
                    </div>
                    <div className='ResetRow' style={{
                        marginTop: "1%", height: "7%",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <div className='createNewAccBtn' style={{
                            fontFamily: "poppins-medium",
                            fontSize: "16px",
                            color: "#043133",
                            outline: "3px solid black",
                            height: "55%",
                            borderRadius: "5em",
                            textAlign: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "25%"

                        }} onClick={() => navigateTo("signup")}>
                            Create New Account
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
