import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { Login, Register } from './pages';

const App = () => {

    return (
        <>
        <Switch>
            <Route exact path='/login'>
                <Login/>
            </Route>
            <Route exact path='/register'>
                <Register/>
            </Route>
        </Switch>
        </>
    )
}

export default App;
