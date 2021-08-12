import React, { useState } from 'react';
import {Button, TextField} from '@material-ui/core';
import requestRegister from '../../requests/register';

const Register = () => {

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

    function handleSubmit(event){
        event.preventDefault();
        requestRegister(input.name, input.email, input.password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField  label="Name" name='name' variant="outlined" onChange={handleChange} />
            <TextField  label="Email" name='email' variant="outlined" onChange={handleChange} />
            <TextField  label="Password" name='password' variant="outlined" onChange={handleChange} />
            <Button type='submit' color="primary" variant="contained">Register</Button>
        </form>
    )
}

export default Register;