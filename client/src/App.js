import React, { useEffect, useState } from 'react'
import Button from './components/Button';
import Button2 from './components/Button2';
import { useSelector, useDispatch } from 'react-redux'
import './styles/App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
/* CUSTOMER VIEWS */
import Home from './views/customer/Home';
import Order from './views/customer/Order';
import Categories from './views/customer/Categories';
import Community from './views/customer/Community';
import Feed from './views/customer/Feed';
import Restaurants from './views/customer/Restaurants';
/* CUSTOMER VIEWS */
import DeliveryHome from './views/delivery/DeliveryHome';
import DeliveryOrder from './views/delivery/DeliveryOrder';
import LandingPage from './views/landing/LandingPage';
import SignIn from './views/landing/SignIn';
import SignUp from './views/landing/SignUp';
import ResetPassword from './views/landing/ResetPassword';
import Otp from './views/landing/Otp';
import ProtectedRoutes from './utils/ProtectedRoutes';
import Dashboard from './views/Dashboard';
function App() {
  // localStorage.clear('type');
  const navigate = useNavigate();
  var user = localStorage.getItem('type')
  useEffect(() => {
    if (user) {
      navigate('/home');
    } else {
      navigate('')
    }
  }, [user])
  const [isSignedIn, setIsSignedIn] = useState(true)
  const [role, setRole] = useState("customer");
  const number = useSelector(state => state.CounterReducer.counter);
  const val = useSelector(state => state.ValueReducer.value)
  // console.log(user)
  const customerRoutes = [
    { id: 1, path: '/home', element: <Home /> },
    { id: 2, path: '/category', element: <Categories /> },
    { id: 3, path: '/community', element: <Community /> },
    { id: 4, path: '/feed', element: <Feed /> },
    { id: 5, path: '/restaurants', element: <Restaurants /> },
  ];
  const deliveryRoutes = [
    { id: 1, path: '/home', element: <DeliveryHome /> },
    { id: 2, path: '/order', element: <DeliveryOrder /> },
  ];
  const guestRoutes = [];
  return (
      <div className='outerContainer'>
      <Sidebar/>
        <div className='container'>
        
          <Routes>
            <Route path='/' element={<LandingPage />} ></Route>
            <Route path='/signin' element={<SignIn />} ></Route>
            <Route path='/signup' element={<SignUp />} ></Route>
            <Route path='/reset' element={<ResetPassword />} ></Route>
            <Route path='/otp' element={<Otp />} ></Route>
            <Route element={<ProtectedRoutes isSignedIn={user} />}>
              {user == "Customer" ? customerRoutes.map((item) => (
                <Route key={item.key} path={item.path} element={item.element} ></Route>
              )) : user == "restaurant" ? deliveryRoutes.map((item) => (
                <Route key={item.key} path={item.path} element={item.element} ></Route>
              )) : <Route path='' element={<LandingPage />} ></Route>}

            </Route>
          </Routes>
        </div>
      </div>
  );
}

export default App;
