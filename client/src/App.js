import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import Button2 from "./components/Button2";
import { useSelector, useDispatch } from "react-redux";
import "./styles/App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as UserRoutes from "./routes/Routes";
import LandingPage from "./views/landing/LandingPage";
import SignIn from "./views/landing/SignIn";
import SignUp from "./views/landing/SignUp";
import ResetPassword from "./views/landing/ResetPassword";
import Otp from "./views/landing/Otp";
import ProtectedRoutes from "./utils/ProtectedRoutes";

import Navbar from "./components/Navbar";

function App() {
  console.log(localStorage.getItem("type"));
  //localStorage.clear('type');
  //console.log(JSON.parse(atob(localStorage.getItem('token').split('.'))))
  const navigate = useNavigate();
  var user = localStorage.getItem("type");
  useEffect(() => {
    if (user) {
      navigate("/home");
    } else {
      navigate("");
    }
  }, [user]);
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [role, setRole] = useState("customer");
  const number = useSelector((state) => state.CounterReducer.counter);
  const val = useSelector((state) => state.ValueReducer.value);
  const guestRoutes = [];
  return (
    <div className="outerContainer">
      <div className="topbar"></div>
      <div className="sidebar">
      <Sidebar type={user} />
      </div>
      
      <div className="container">
     <div className="navbar">
     <Navbar type={user} />
     </div>
      
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/reset" element={<ResetPassword />}></Route>
          <Route path="/otp" element={<Otp />}></Route>
          <Route element={<ProtectedRoutes isSignedIn={user} />}>
            {user == "Customer" ? (
              UserRoutes.customerRoutes.map((item) => <Route key={item.id} path={item.path} element={item.element}></Route>)
            ) : user == "resturantManager" ? (UserRoutes.restaurantRoutes.map((item) => <Route key={item.key} path={item.path} element={item.element}></Route>)
            ) : user=="Admin"? (UserRoutes.adminRoutes.map((item) => <Route key={item.key} path={item.path} element={item.element}></Route>)
            ) : user=="Staff"?(UserRoutes.staffRoutes.map((item) => <Route key={item.key} path={item.path} element={item.element}></Route>))
            : (<Route path="" element={<LandingPage />}></Route>
            )}
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
