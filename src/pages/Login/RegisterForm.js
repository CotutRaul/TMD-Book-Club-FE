import React, { useState, useEffect, useRef } from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles'
import { addUser } from '../../services/UserService'



function RegisterForm() {
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const [result, setResult] = useState(null);
    const isInitialMount = useRef(true);
    const classes = useStyle()



    const HandleSubmit = e => {
        e.preventDefault();

        if (user.name.length * user.email.length * user.password.length > 0) {

            const fetchData = async () => {
                setResult(await addUser(user))
            }

            fetchData()
        }
    }

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            localStorage.setItem('user', JSON.stringify(result));
            window.location.href = "/";
        }
    }, [result])


    return (
        <form className={classes.RegisterForm} onSubmit={HandleSubmit}>
            <Paper elevation={5}>

                <div className={classes.FormGroup}><h2>Register</h2></div>
                <div className={classes.FormGroup}>
                    <TextField
                        id="registerNameField"
                        label="Name"
                        type="text"
                        onChange={e => setUser({ ...user, name: e.target.value })}
                    />
                </div>
                <div className={classes.FormGroup}>
                    <TextField
                        id="registerEmailField"
                        label="Email"
                        type="email"
                        onChange={e => setUser({ ...user, email: e.target.value })}
                    />
                </div>
                <div className={classes.FormGroup}>
                    <TextField
                        id="registerPasswordField"
                        label="Password"
                        type="password"
                        onChange={e => setUser({ ...user, password: e.target.value })}
                    />
                </div>
                <div className={classes.FormGroup}><Button type='submit' variant="outlined">Register</Button></div>
            </Paper>
        </form>
    )
}

const useStyle = makeStyles({
    RegisterForm: {
        width: "fit-content",
        height: "fit-content",
        marginLeft: "auto",
        marginRight: "5%"
    },

    FormGroup: {
        margin: "10px"
    }
})

export default RegisterForm