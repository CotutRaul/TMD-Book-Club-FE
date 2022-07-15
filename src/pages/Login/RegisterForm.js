import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function RegisterForm() {
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const [result, setResult] = useState(null);


    const HandleSubmit = e => {
        e.preventDefault();

        if (user.name.length * user.email.length * user.password.length > 0) {

            fetch('http://localhost:8080/users', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => {
                if(res.status===201)
                {
                    res.json().then(jsonResult => setResult(jsonResult))
                }
                if(res.status===400)
                {
                    alert("Wrong data inserted")
                }
            })

        }
    }

    useEffect(() => {
        console.log(result);
    }, [result])


    return (
        <form className='RegisterForm' onSubmit={HandleSubmit}>
            <Paper elevation={5}>

                <div className='FormGroup'><h2>Register</h2></div>
                <div className='FormGroup'>
                    <TextField
                        id="registerNameField"
                        label="Name"
                        type="text"
                        onChange={e => setUser({ ...user, name: e.target.value })}
                    />
                </div>
                <div className='FormGroup'>
                    <TextField
                        id="registerEmailField"
                        label="Email"
                        type="email"
                        onChange={e => setUser({ ...user, email: e.target.value })}
                    />
                </div>
                <div className='FormGroup'>
                    <TextField
                        id="registerPasswordField"
                        label="Password"
                        type="password"
                        onChange={e => setUser({ ...user, password: e.target.value })}
                    />
                </div>
                <div className='FormGroup'><Button type='submit' variant="outlined">Register</Button></div>
            </Paper>
        </form>
    )
}

export default RegisterForm