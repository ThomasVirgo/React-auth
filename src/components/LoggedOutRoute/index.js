import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';

const LoggedOutRoute = ({ component: Component, path }) => {
    let token = localStorage.getItem('token');
    const isLoggedInState = useSelector(state => state.isLoggedIn);
    let isLoggedIn;
    try {
        const user = jwt_decode(token);
        isLoggedIn = user ? true : false;
    } catch (error) {
        // console.log(error);
        isLoggedIn = false;
    }
    isLoggedIn = isLoggedIn && isLoggedInState;
    return (
        <Route exact path={path} render={()=>(
            !isLoggedIn ? <Component/> : <Redirect to='/dashboard'/>
        )}/>
    )
}

export default LoggedOutRoute;