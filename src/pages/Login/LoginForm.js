/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles'
import { authenticateLogin } from '../../services/userService'
import { useDispatch } from "react-redux"
import { login } from "../../state/slices/userSlice"




export const LoginForm = () => {
    const [userDataInput, setUserDataInput] = useState({ email: "", password: "" });
    const [result, setResult] = useState(null);
    const dispatch = useDispatch()
    const isInitialMount = useRef(true);
    const classes = useStyle()



    const HandleSubmit = e => {
        e.preventDefault();

        const fetchData = async () => {
            setResult(await authenticateLogin({ email: userDataInput.email, password: userDataInput.password }))
        }

        fetchData()
    }

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            dispatch(login(result))
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
                        onChange={e => setUserDataInput({ ...userDataInput, email: e.target.value })}
                    />
                </div>
                <div className={classes.FormGroup}>
                    <TextField
                        id="loginPasswordField"
                        label="Password"
                        type="password"
                        onChange={e => setUserDataInput({ ...userDataInput, password: e.target.value })}
                    />
                </div>
                <div className={classes.FormGroup}><Button type="submit" variant="outlined">Login</Button></div>
                <br/>

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
