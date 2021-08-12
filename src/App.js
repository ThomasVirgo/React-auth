import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Register, Dashboard } from './pages';

const App = () => {

    return (
        <>
        <Switch>
            <Route exact path='/dashboard'>
                <Dashboard/>
            </Route>
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
