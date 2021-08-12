import React, { useState } from 'react';
import {Button, TextField} from '@material-ui/core';
import requestLogin from '../../requests/login';

const Login = () => {

    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    function handleChange(event){
        const {name, value} = event.target;
        let newInput = {...input, [name]: value};
        setInput(newInput);
    }

    function handleSubmit(event){
        event.preventDefault();
        requestLogin(input.email, input.password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField  label="Email" name='email' variant="outlined" onChange={handleChange} />
            <TextField  label="Password" name='password' variant="outlined" onChange={handleChange} />
            <Button type='submit' color="primary" variant="contained">Login</Button>
        </form>
    )
}

export default Login;