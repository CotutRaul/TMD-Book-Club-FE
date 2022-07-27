/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles'
import { addUser } from '../../services/userService'
import { useDispatch } from "react-redux"
import { login } from "../../state/slices/userSlice"



function RegisterForm() {
    const [userDataInput, setUserDataInput] = useState({ name: "", email: "", password: "" });
    const [result, setResult] = useState(null);
    const dispatch = useDispatch()
    const isInitialMount = useRef(true);
    const classes = useStyle()



    const HandleSubmit = e => {
        e.preventDefault();

        if (userDataInput.name.length * userDataInput.email.length * userDataInput.password.length > 0) {

            const fetchData = async () => {
                setResult(await addUser(userDataInput))
            }

            fetchData()
        }
    }

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            dispatch(login(result))
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
                        onChange={e => setUserDataInput({ ...userDataInput, name: e.target.value })}
                    />
                </div>
                <div className={classes.FormGroup}>
                    <TextField
                        id="registerEmailField"
                        label="Email"
                        type="email"
                        onChange={e => setUserDataInput({ ...userDataInput, email: e.target.value })}
                    />
                </div>
                <div className={classes.FormGroup}>
                    <TextField
                        id="registerPasswordField"
                        label="Password"
                        type="password"
                        onChange={e => setUserDataInput({ ...userDataInput, password: e.target.value })}
                    />
                </div>
                <div className={classes.FormGroup}><Button type='submit' variant="outlined">Register</Button></div>
                <br/>
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