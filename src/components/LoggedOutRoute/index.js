import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LoggedOutRoute = ({ component: Component, path }) => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    return (
        <Route exact path={path} render={()=>(
            !isLoggedIn ? <Component/> : <Redirect to='/dashboard'/>
        )}/>
    )
}

export default LoggedOutRoute;