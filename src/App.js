import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Register, Dashboard } from './pages';
import { PrivateRoute } from './components';

const App = () => {

    return (
        <>
        <Switch>
            <PrivateRoute path = '/dashboard' component={Dashboard} />
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
