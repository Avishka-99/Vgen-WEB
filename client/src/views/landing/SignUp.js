import React, { useState, useEffect } from 'react'
import '../../styles/SignUp.css'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import googleiMG from '../../assets/icons/google.png';
import facebookiMG from '../../assets/icons/facebook.png'
export default function SignUp() {
  var user = localStorage.getItem('type')
  const [role, setRole] = useState('customer');
  const [homeNo, setHomeNo] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [nic, setNic] = useState('');
  const [name, setName] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [userRole, setuserRole] = useState();
  const [profilePicture, setProfilePicture] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [contactNo, setContactNo] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
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
  const handleSubmit = (e) => {
    Axios.post(API_ENDPOINTS.SIGNUP_URL, {
      email: email,
      password: password,
      nic: nic,
      name: name,
      firstName: firstName,
      lastName: lastName,
      userRole: userRole,
      contactNo: contactNo,
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
      <div className='SignUpleftContainer'></div>
      <div className='SignUpRightContainer'>
        <div className='SignUpForm'>
          <div className='Slogan'>Embrace Your Vegan Journey</div>
          <div className='Logintitle'>Sign Up Today!</div>
          <div className='signUpRow' style={{ marginTop: "3%" }}>
            <div className='leftTextBox'>
              <input className="signUpInput" type="text" autoComplete="off" name="firstName" onChange={(event) => setfirstName(event.target.value)} required></input>
              <label className='placeholder_signup'>First Name*</label>
            </div>
            <div className='rightTextBox'>
              <input className="signUpInput" type="text" autoComplete="off" name="lastName" onChange={(event) => setlastName(event.target.value)} required></input>
              <label className='placeholder_signup'>Last Name*</label>
            </div>
          </div>
          <div className='signUpRow'>
            <div className='leftTextBox'>
              <input className="signUpInput" type={'text'} autoComplete="off" name="nic" onChange={(event) => setNic(event.target.value)} required></input>
              <label className='placeholder_signup'>NIC*</label>
            </div>
            <div className='rightTextBox'>
              <input className="signUpInput" type={'text'} autoComplete="off" name="contacNo" onChange={(event) => setContactNo(event.target.value)} required></input>
              <label className='placeholder_signup'>Contact No*</label>
            </div>
          </div>
          <div className='signUpRow' style={{ width: "100%" }}>
            <div className='leftTextBox' style={{ width: "100%" }} >
              <input className="signUpInput" type={'email'}  autoComplete="off" name="email" onChange={(event) => setEmail(event.target.value)} required></input>
              <label className='placeholder_signup_email'>Email*</label>
            </div>
          </div>
          <div className='signUpRow'>
            <div className='leftTextBox'>
              <input className="signUpInput" type={'password'} autoComplete="off" name="password" onChange={(event) => setPassword(event.target.value)} required></input>
              <label className='placeholder_signup'>Password*</label>
            </div>
            <div className='rightTextBox'>
              <input className="signUpInput" type={'password'} autoComplete="off" onChange={(event) => setConfirmPassword(event.target.value)} required></input>
              <label className='placeholder_signup'>Confirm Password*</label>
            </div>
          </div>
          <label className='iam' >I am a</label>
          <div className='signUpRadionRow'>
            <div className='signUpRadioItem'>
              <input type={'radio'} autoComplete="off"  value="Customer" name="userRole" onChange={(event) => setuserRole(event.target.value)} checked />
              <label className='signUpRadioOption'>Vegan User</label>
            </div>
            <div className='signUpRadioItem'>
              <input type={'radio'} autoComplete="off"  value="resturantManager" name="userRole" onChange={(event) => setuserRole(event.target.value)} />
              <label className='signUpRadioOption'>Product Manufacture</label>
            </div>
            <div className='signUpRadioItem'>
              <input type={'radio'} autoComplete="off"  value="productManufacture" name="userRole" onChange={(event) => setuserRole(event.target.value)} />
              <label className='signUpRadioOption'>Restaurant Manager</label>
            </div>
          </div>




          <div className='signUpRow' style={{ display: "flex", justifyContent: "center", height: "9%", alignItems: "center" }}>
            <div className='btn_signup' onClick={handleSubmit}>
              Create Account
              <div className='arrowCircle'></div>
            </div>
          </div>
          <div className='signUpRow' style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "flex", justifyContent: "space-around", width: "38%" }}>
              <span style={{ fontFamily: "poppins-regular" }}>Already have an account?</span>
              <span className='loginText' style={{ fontFamily: "poppins-regular", color: "#274C5B",textDecoration:"underline" }} onClick={() => navigateTo("signin")}>Log in</span>
            </div>

          </div>
          <div className='signUpRow' style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              fontFamily: "poppins-medium",
              fontSize: "22px",
              color: "#274C5B",
            }}>
              OR
            </div>
          </div>
          <div className='signUpRowLast' style={{ marginTop: "2%" }}>
            <div className='signUpWIthGooFb'>
              <div className='signUpImage' style={{ backgroundImage: "url(" + googleiMG + ")" }}></div>
              <div className='signUpText'>Sign up with Google</div>
            </div>
            <div className='signUpWIthGooFb'>
              <div className='signUpImage' style={{ backgroundImage: "url(" + facebookiMG + ")" }}></div>
              <div className='signUpText'>Sign up with Facebook</div>
            </div>
          </div>
        </div>

      </div>
    </div>
    // <div className='SignUpContainer'>
    //   <div className='signInImage'>
    //     <div className='img1'></div>
    //   </div>
    //   <div className='formSignUp'>
    //     <div className='head'><h3>Join the vegan revolution</h3><h1>Sign Up Today!</h1></div>
    //     <form className='signUpFormClass' >
    //       <div className='con1'>
    //         <div className='contain_input'>
    //           <input type="text" autoComplete="off" name="firstName" onChange={(event) => setfirstName(event.target.value)} required></input>
    //           <span className='placeholder1'>First Name</span>
    //         </div>
    //         <div className='contain_input'>
    //           <input type="text" autoComplete="off" name="lastName" onChange={(event) => setlastName(event.target.value)} required></input>
    //           <span className='placeholder1'>Last Name</span>
    //         </div>

    //         <div className='contain_input'>
    //           <input type={'text'} autoComplete="off" name="nic" onChange={(event) => setNic(event.target.value)} required></input>
    //           <span className='placeholder1'>Nic No</span>
    //         </div>

    //         <div className='contain_input'>
    //           <input type={'text'} autoComplete="off" name="contacNo" onChange={(event) => setContactNo(event.target.value)} required></input>
    //           <span className='placeholder1'>Contact No</span>
    //         </div>





    //         <div className='contain_input'>

    //           <input type={'password'} autoComplete="off" name="password" onChange={(event) => setPassword(event.target.value)} required></input>
    //           <span className='placeholder1'>Password</span>
    //         </div>
    //         <div className='contain_input'>
    //           <input type={'password'} autoComplete="off" onChange={(event) => setConfirmPassword(event.target.value)} required></input>
    //           <span className='placeholder1'>confirm password</span>
    //         </div>

    //         <div className='contain_input1'>


    //           <input type={'email'} className='email' autoComplete="off" name="email" onChange={(event) => setEmail(event.target.value)} required></input>
    //           <span className='placeholder1'>Email</span>

    //         </div>
    //       </div>
    //       <div className='contain_category'>
    //         <div className='head2'>
    //           <p>I am a</p>
    //         </div>
    //         <div className='radioContainer'>
    //           <input type={'radio'} autoComplete="off" className='radio' value="Customer" name="userRole" onChange={(event) => setuserRole(event.target.value)} required />
    //           <label className='radiolbl'>Customer</label>
    //           <input type={'radio'} autoComplete="off" className='radio' value="resturantManager" name="userRole" onChange={(event) => setuserRole(event.target.value)} required />
    //           <label className='radiolbl'>Resturant Manager</label>
    //           <input type={'radio'} autoComplete="off" className='radio' value="productManufacture" name="userRole" onChange={(event) => setuserRole(event.target.value)} required />
    //           <label className='radiolbl'>Farmer</label>
    //         </div>
    //       </div>
    //       <div className='contain_input3'>
    //         <div className='submitButton1' onClick={handleSubmit}>CREATE ACCOUNT</div>
    //         <div className='signInLink'>Already have an account? <a onClick={() => navigateTo("signin")}>Sign In</a></div>
    //       </div>
    //     </form>
    //   </div>

    // </div>
  )
}
