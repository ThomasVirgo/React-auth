import React, { useState } from 'react';
import {Button, TextField} from '@material-ui/core';
import requestRegister from '../../requests/register';
import requestLogin from '../../requests/login';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import loginAction from '../../actions/login';

const Register = () => {

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    function handleChange(event){
        const {name, value} = event.target;
        let newInput = {...input, [name]: value};
        setInput(newInput);
    }

    async function handleSubmit(event){
        event.preventDefault();
        try {
            const data = await requestRegister(input.name, input.email, input.password);
            const loginData  = await requestLogin(input.email, input.password);
            const user = jwt_decode(loginData.token);
            localStorage.setItem('token', loginData.token);
            dispatch(loginAction(user, loginData.token));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <TextField  label="Name" name='name' variant="outlined" onChange={handleChange} />
            <TextField  label="Email" name='email' variant="outlined" onChange={handleChange} />
            <TextField  label="Password" name='password' variant="outlined" onChange={handleChange} />
            <Button type='submit' color="primary" variant="contained">Register</Button>
        </form>
        <p>Already have an account? Login <Link to='/login'>Here</Link> </p>
        </>
    )
}

export default Register;