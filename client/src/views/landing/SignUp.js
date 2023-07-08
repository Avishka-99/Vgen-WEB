import React, { useState,useEffect } from 'react'
import  '../../styles/SignUp.css'
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
  const [nic,setNic] = useState('');
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
      nic:nic,
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
      <div className='signInImage'>
        <div className='img1'></div>
      </div>
      <div className='formSignUp'>
      <div className='head'><h3>Join the vegan revolution</h3><h1>Sign Up Today!</h1></div>
      <form className='signUpFormClass' >
        <div className='con1'>
       <div className='contain_input'>
         <input type={'text'} autoComplete="off"  name="firstName" onChange={(event)=>setfirstName(event.target.value)} required></input>
         <span className='placeholder1'>First Name</span>
     </div>
     <div className='contain_input'>
          <input type={'text'} autoComplete="off"  name="lastName" onChange={(event)=>setlastName(event.target.value)} required></input>
          <span className='placeholder1'>Last Name</span>
          </div>

          <div className='contain_input'>
              <input type={'text'} autoComplete="off"  name="nic" onChange={(event)=>setNic(event.target.value)} required></input>
              <span className='placeholder1'>Nic No</span>
          </div>
         
          <div className='contain_input'>
              <input type={'text'} autoComplete="off" name="contacNo" onChange={(event)=>setContactNo(event.target.value)} required></input>
              <span className='placeholder1'>Contact No</span>
            </div>

         
          
           

            <div className='contain_input'>
         
            <input type={'password'} autoComplete="off" name="password"  onChange={(event)=>setPassword(event.target.value)} required></input>
            <span className='placeholder1'>Password</span>
            </div>
            <div className='contain_input'>
              <input type={'password'} autoComplete="off"  onChange={(event)=>setConfirmPassword(event.target.value)} required></input>
              <span className='placeholder1'>confirm password</span>
              </div>
              
            <div className='contain_input1'>
           
            
           <input type={'email'} className='email' autoComplete="off"  name="email" onChange={(event)=>setEmail(event.target.value)} required></input>
           <span className='placeholder1'>Email</span>
             
        </div>
              
  
              
{/*          
        new signup    */}
       
</div>
<div className='contain_category'>
  <div className='head2'>
              <p>I am a</p>
              </div>
            <div className='radioContainer'>
              <input type={'radio'} autoComplete="off" className='radio' value="Customer" name="userRole" onChange={(event)=>setuserRole(event.target.value)} required/>
              <label className='radiolbl'>Customer</label> 
               <input type={'radio'} autoComplete="off" className='radio' value="resturantManager" name="userRole" onChange={(event)=>setuserRole(event.target.value)} required/>
               <label className='radiolbl'>Resturant Manager</label>
               <input type={'radio'} autoComplete="off" className='radio' value="productManufacture" name="userRole" onChange={(event)=>setuserRole(event.target.value)} required/>
               <label className='radiolbl'>Farmer</label>
               </div>
              </div>
            <div className='contain_input3'>
              <div className='submitButton1' onClick={handleSubmit}>CREATE ACCOUNT</div>
              <div className='signInLink'>Already have an account? <a onClick={()=>navigateTo("signin")}>Sign In</a></div>
              </div>
            </form>
      </div>
      
    </div>
  )
}
