import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Register, Dashboard, LandingPage } from './pages';
import { PrivateRoute, LoggedOutRoute } from './components';

const App = () => {

    return (
        <>
        <Switch>
            <PrivateRoute path = '/dashboard' component={Dashboard} />
            <LoggedOutRoute path = '/login' component={Login} />
            <LoggedOutRoute path = '/register' component={Register} />
            <LoggedOutRoute path = '/' component={LandingPage} />
        </Switch>
        </>
    )
}

export default App;
