import React from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import "./Login.css"


function Login() {
  return (
    <div>
      <div className='FormsContainer'>
        <RegisterForm />
        <LoginForm />
      </div>
    </div>
  )
}

export default Login