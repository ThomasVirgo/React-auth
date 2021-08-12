import React, { useState } from 'react';
import {Button, TextField} from '@material-ui/core';
import requestLogin from '../../requests/login';
import loginAction from '../../actions/login';
import { useDispatch, useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { Redirect } from 'react-router-dom';

const Login = () => {

    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const isLoggedIn = useSelector(state => state.isLoggedIn);

    const dispatch = useDispatch();

    function handleChange(event){
        const {name, value} = event.target;
        let newInput = {...input, [name]: value};
        setInput(newInput);
    }

    async function handleSubmit(event){
        event.preventDefault();
        try {
            const data  = await requestLogin(input.email, input.password);
            const user = jwt_decode(data.token);
            localStorage.setItem('token', data.token);
            dispatch(loginAction(user, data.token));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        { isLoggedIn && <Redirect to='/dashboard'/>}
        <form onSubmit={handleSubmit}>
            <TextField  label="Email" name='email' variant="outlined" onChange={handleChange} />
            <TextField  label="Password" name='password' variant="outlined" onChange={handleChange} />
            <Button type='submit' color="primary" variant="contained">Login</Button>
        </form>
        </>
    )
}

export default Login;