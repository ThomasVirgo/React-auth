import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import logoutAction from '../../actions/logout';

const Dashboard = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const user = useSelector(state => state.user);
    const token = useSelector(state => state.token); 

    const dispatch = useDispatch();

    function handleLogout(){
        dispatch(logoutAction());
    }

    return (
        <>
        {!isLoggedIn && <Redirect to='/login' />}
        <h1>Welcome {user.name}, my friend!</h1>
        <button onClick={handleLogout}>Logout</button>
        </>
    );
};

export default Dashboard;