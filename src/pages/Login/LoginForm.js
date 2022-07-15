import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function LoginForm() {
    const [user, setUser] = useState({email:"", password:""});
    const [result, setResult] = useState(null);

    const HandleSubmit = e =>{
        e.preventDefault();

        fetch(`http://localhost:8080/users?email=${user.email}&password=${user.password}`,{
            method:"GET"
        })
        .then(res => {
            if(res.status===200)
            {
                res.json().then(jsonResult => setResult(jsonResult))
            }
            if(res.status===204)
            {
                alert("Wrong data inserted")
            }
        })

        
    }
    
    useEffect(() => {
      console.log(result);
    }, [result])
    

    return (
        <form className='LoginForm' onSubmit={HandleSubmit}>
        <Paper elevation={5}>
            

                <div className='FormGroup'><h2 >Login</h2></div>
                <div className='FormGroup'>
                    <TextField
                        id="loginEmailField"
                        label="Email"
                        type="email"
                        onChange={e => setUser({...user, email: e.target.value})}
                    />
                </div>
                <div className='FormGroup'>
                    <TextField
                        id="loginPasswordField"
                        label="Password"
                        type="password"
                        onChange={e => setUser({...user, password: e.target.value})}
                    />
                </div>
                <div className='FormGroup'><Button type="submit" variant="outlined">Login</Button></div>

        </Paper>
        </form>
    )
}

export default LoginForm