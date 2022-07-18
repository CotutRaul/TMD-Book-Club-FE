import React from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {

  const checkIfLogin = () => {
    return localStorage.getItem("user") !== null
  }


  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" exact element={checkIfLogin() ? <Home /> : <Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
