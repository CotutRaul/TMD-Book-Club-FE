import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux"
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { MyBooks } from './pages/Profile/MyBooks'
import { NavBar } from './components/NavBar';
import { MyRented } from './pages/Profile/MyRented';
import { MyWaitingList } from './pages/Profile/MyWaitingList';



export const App = () => {
  const user = useSelector((state) => state.user.value)
  const checkIfLogin = () => {
    return user !== null
  }


  return (
    <Router>
      <NavBar />
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