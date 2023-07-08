import React, { useState,useEffect } from 'react'
import '../../styles/SignIn.css'
import { json, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SetUserAction } from '../../actions/SetUserAction';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
//import Axios from 'axios';
export default function SignIn() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    var user = localStorage.getItem('type')
    const navigate = useNavigate();
    useEffect(()=>{
        if(user){
            navigate('/home');
        }
        //console.log("Landing");
      },[])
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
            if(response.data.type){
                dispatch(SetUserAction(response.data.type));
                localStorage.setItem('token',response.data.token);
                navigate('/home');
                //window.location.reload(true);
            }else{
                return
            }
            //console.log(response.data);
        });
        //e.preventDefault();
        //console.log(e.target[0].value);


    }
    return (
        <div className='SignInContainer'>
            <div className='form'>
                <div className='formContainer'>
                    <div className='formTitle'>Login</div>
                    <hr className='divider'></hr>
                    <div className='formInput'>
                        <form className='signInForm'>
                            <input type={'name'} autoComplete="off" onChange={(event)=>setEmail(event.target.value)} required></input>
                            <label className='placeholder'>User name</label>
                            <input type={'password'} onChange={(event)=>setPassword(event.target.value)} required></input>
                            <label className='placeholder'>Password</label>
                            <div className='submitButton' onClick={handleSubmit}>Sign In</div>
                            <span className='signupLink'>Not registered yet? <span className='signupText' onClick={() => navigateTo("signup")}>Sign up</span> now.</span>
                        </form>
                    </div>
                </div>
            </div>
            <div className='signInImage'>
                <div className='img'></div>
            </div>
        </div>
    )
}
