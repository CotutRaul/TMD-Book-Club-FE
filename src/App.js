import React from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyBooks from './pages/Profile/MyBooks'
import NavBar from './componets/NavBar';
import SimpleBar from './componets/SimpleBar';
import { MyRented } from './pages/Profile/MyRented';


function App() {
  const checkIfLogin = () => {
    return localStorage.getItem("user") !== null
  }


  return (
    <Router>
      {checkIfLogin() ? <NavBar /> : <SimpleBar />}
      <div className='App'>
        <Routes>

          <Route path='/' exact element={checkIfLogin() ? <Home /> : <Login />} />
          <Route path='/myBooks' exact element={<MyBooks />}></Route>
          <Route path='/myRented' exact element={<MyRented />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
