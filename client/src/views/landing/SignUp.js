import React, { useState,useEffect } from 'react'
import '../../styles/SignUp.css'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
export default function SignUp() {
  var user = localStorage.getItem('type')
  const [role, setRole] = useState('customer');
  const [homeNo, setHomeNo] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  const [name,setName] = useState('');
  const[firstName,setfirstName] = useState('');
  const[lastName,setlastName] = useState('');
  const[userRole,setuserRole] = useState();
  const[profilePicture,setProfilePicture]=useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmpassword,setConfirmPassword] = useState('');
  const [contactNo,setContactNo] = useState('');
  const navigate = useNavigate();
  useEffect(()=>{
    if(user){
      navigate('/home');
    }
    //console.log("Landing");
  })
  const navigateTo = (page) => {
    if (page === "home") {
      navigate('');
    } else {
      navigate('/' + page);
    }
  }
  const handleSubmit =(e)=>{
    Axios.post(API_ENDPOINTS.SIGNUP_URL, {
      email: email,
      password: password,
      homeNo:homeNo,
      street:street,
      city:city,
      age:age,
      name:name,
      firstName:firstName,
      lastName:lastName,
      userRole:userRole,
      contactNo:contactNo,
      // profilePicture:profilePicture
    }).then((response) => {
      // Axios.get("http://localhost:5000/api/get").then((response) => {
      //   console.log("helo");
      // });
      navigate('/');
    });
   //e.preventDefault();
    //console.log(e.target[0].value);
    
    
  }
  return (
    <div className='SignUpContainer'>
      <div className='formSignUp'>
        <div className='formSignUpContainer'>
          <div className='formSignUpTitle'>Sign Up</div>
          <hr className='divider'></hr>
          <div className='formSignUpInput'>
            <form className='signUpFormClass' >
           {/* {name} */}
              {/* <input type={'text'} name="username" autoComplete="off" onChange={(event)=>setName(event.target.value)}  required></input>
              <label className='signUpPlaceholder'>Name</label> */}
              <input type={'email'} autoComplete="off" name="email" onChange={(event)=>setEmail(event.target.value)} required></input>
              <label className='signUpPlaceholder'>Email</label>
              <input type={'password'} autoComplete="off" name="password" onChange={(event)=>setPassword(event.target.value)} required></input>
              <label className='signUpPlaceholder'>Password</label>
              <input type={'password'} autoComplete="off" onChange={(event)=>setConfirmPassword(event.target.value)} required></input>
              <label className='signUpPlaceholder'>Confirm password</label>
              <input type={'text'} autoComplete="off" name="homeNo" onChange={(event)=>setHomeNo(event.target.value)} required></input>
              <label className='signUpPlaceholder'>Home No</label>
              <input type={'text'} autoComplete="off" name="street" onChange={(event)=>setStreet(event.target.value)} required></input>
              <label className='signUpPlaceholder'>Street</label>
              <input type={'text'} autoComplete="off" name="city" onChange={(event)=>setCity(event.target.value)} required></input>
              <label className='signUpPlaceholder'>City</label>
              <input type={'text'} autoComplete="off" name="age" onChange={(event)=>setAge(event.target.value)} required></input>
              <label className='signUpPlaceholder'>Age</label>
              <input type={'text'} autoComplete="off" name="firstName" onChange={(event)=>setfirstName(event.target.value)} required></input>
              <label className='signUpPlaceholder'>First Name</label>
              <input type={'text'} autoComplete="off" name="lastName" onChange={(event)=>setlastName(event.target.value)} required></input>
              <label className='signUpPlaceholder'>Last Name</label>
              <input type={'radio'} autoComplete="off" value="Customer" name="userRole" onChange={(event)=>setuserRole(event.target.value)} required/>Customer
              <input type={'radio'} autoComplete="off" value="resturantManager" name="userRole" onChange={(event)=>setuserRole(event.target.value)} required/>Resturant Manager
              <input type={'radio'} autoComplete="off" value="productManufacture" name="userRole" onChange={(event)=>setuserRole(event.target.value)} required/>Farmer
              <input type={'text'} autoComplete="off" name="contacNo" onChange={(event)=>setContactNo(event.target.value)} required></input>
              <label className='signUpPlaceholder'>Contact Number</label>
              <div className='submitButton' onClick={handleSubmit}>Sign Up</div>
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
