import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, path: url }) => (
    <Route path={url} render={(props) => (
        window.localStorage.getItem('isAuthenticated') || false === true
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
);

export default PrivateRoute;