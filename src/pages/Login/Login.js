import React from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import SimpleBar from '../../componets/SimpleBar'
import { makeStyles } from '@mui/styles'



function Login() {
  const classes = useStyle()
  return (
    <div>
      <SimpleBar />
      <div className={classes.FormsContainer}>
        <RegisterForm className={classes.RegisterForm} />
        <LoginForm className={classes.LoginForm} />
      </div>
    </div>
  )
}

const useStyle = makeStyles({
  FormsContainer: {
    margin: "50px",
    display: "flex"
  }
})

export default Login