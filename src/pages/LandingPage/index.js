import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <>
            <h1>React Auth</h1>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </>
    )
}

export default LandingPage;
