import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux"
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { MyBooks } from './pages/Profile/MyBooks'
import { NavBar } from './componets/NavBar';
import { SimpleBar } from './componets/SimpleBar';
import { MyRented } from './pages/Profile/MyRented';



export const App = () => {
  const user = useSelector((state) => state.user.value)
  const checkIfLogin = () => {
    return user !== null
  }


  return (
    <Router>
      {checkIfLogin() ? <NavBar /> : <SimpleBar />}
      <div className='App'>
        <Routes>

          <Route path='/' exact element={checkIfLogin() ? <Home /> : <Login />} />
          <Route path='/myBooks' exact element={checkIfLogin() ? <MyBooks /> : <Login />} />
          <Route path='/myRented' exact element={checkIfLogin() ? <MyRented /> : <Login />}></Route>
        </Routes>
      </div>
    </Router>
  )
}