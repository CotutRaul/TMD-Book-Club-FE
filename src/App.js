import React from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" exact element={<Login/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
