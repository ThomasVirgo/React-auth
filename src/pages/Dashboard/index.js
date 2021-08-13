import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import logoutAction from '../../actions/logout';
import { TriviaFeed } from '../../components';

const Dashboard = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const user = useSelector(state => state.user);
    const token = useSelector(state => state.token); 

    const dispatch = useDispatch();

    function handleLogout(){
        localStorage.clear();
        dispatch(logoutAction());
    }

    return (
        <>
        <h1>Welcome {user.name}, my friend!</h1>
        <button onClick={handleLogout}>Logout</button>
        <TriviaFeed/>
        </>
    );
};

export default Dashboard;