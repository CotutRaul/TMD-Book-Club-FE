import React from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import './Login.css'
import SimpleBar from '../../componets/SimpleBar'


function Login() {

  return (
    <div>
      <SimpleBar/>
      <div className='FormsContainer'>
        <RegisterForm />
        <LoginForm />
      </div>
    </div>
  )
}

export default Login