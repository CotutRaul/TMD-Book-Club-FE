import React, { useState, useEffect, useRef } from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles'




function LoginForm() {
    const [user, setUser] = useState({ email: "", password: "" });
    const [result, setResult] = useState(null);
    const isInitialMount = useRef(true);
    const classes = useStyle()


    const HandleSubmit = e => {
        e.preventDefault();

        fetch(`http://localhost:8080/users?email=${user.email}&password=${user.password}`, {
            method: "GET"
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(jsonResult => setResult(jsonResult))
                }
                if (res.status === 204) {
                    alert("Wrong data inserted")
                }
            })


    }

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            console.log(result);
            localStorage.setItem('user', JSON.stringify(result));
            window.location.href = "/";
        }
    }, [result])


    return (
        <form className={classes.LoginForm} onSubmit={HandleSubmit}>
            <Paper elevation={5}>


                <div className={classes.FormGroup}><h2 >Login</h2></div>
                <div className={classes.FormGroup}>
                    <TextField
                        id="loginEmailField"
                        label="Email"
                        type="email"
                        onChange={e => setUser({ ...user, email: e.target.value })}
                    />
                </div>
                <div className={classes.FormGroup}>
                    <TextField
                        id="loginPasswordField"
                        label="Password"
                        type="password"
                        onChange={e => setUser({ ...user, password: e.target.value })}
                    />
                </div>
                <div className={classes.FormGroup}><Button type="submit" variant="outlined">Login</Button></div>

            </Paper>
        </form>
    )
}

const useStyle = makeStyles({
    LoginForm: {
        width: "fit-content",
        height: "fit-content",
        marginLeft: "5%",
        marginRight: "auto"
    },

    FormGroup: {
        margin: "10px"
    }
})

export default LoginForm