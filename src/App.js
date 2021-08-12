import React, {useState, useEffect} from 'react';
import jwt_decode from 'jwt-decode';
import { Login, Register } from './pages';

const App = () => {

    return (
        <>
        <Login/>
        <Register/>
        </>
    )
}

export default App;
