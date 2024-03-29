import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { MyBooks } from './pages/Profile/MyBooks'
import { NavBar } from './components/NavBar';
import { MyRented } from './pages/Profile/MyRented';
import { MyWaitingList } from './pages/Profile/MyWaitingList';
import jwt_decode from "jwt-decode";
import { logout } from "./state/slices/userSlice"
import { deauthenticate } from './state/slices/jwtSlice';


export const App = () => {
  const jwt = useSelector((state) => state.jwt.value)
  const dispatch = useDispatch()
  const checkIfLogin = () => {
    if(jwt===null){
      return false
    }
    return true
  }
  const startTimeOutTimer = ()=>{
    if(jwt){
      const exp = jwt_decode(jwt).exp;
      return setTimeout(()=>{
        alert("Session timeout")
        dispatch(logout())
        dispatch(deauthenticate())
      }, exp*1000-new Date().getTime())
    }
  }

  return (
    <Router>
      <NavBar timeOut = {startTimeOutTimer()}/>
      <div className='App'>
        <Routes>
          <Route path='/' exact element={checkIfLogin() ? <Home /> : <Login />} />
          <Route path='/myBooks' exact element={checkIfLogin() ? <MyBooks /> : <Login />} />
          <Route path='/myRented' exact element={checkIfLogin() ? <MyRented /> : <Login />}/>
          <Route path='/myWaitingList' exact element={checkIfLogin() ? <MyWaitingList /> : <Login />}/>
        </Routes>
      </div>
    </Router>
  )
}