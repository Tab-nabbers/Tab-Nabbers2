import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';



export default class ProtectedRouteUI extends Component {
    render() {
        
        const isAuthenticated = window.localStorage.getItem('isAuthenticated')|| false;
        if (isAuthenticated) {
            return <Route exact path={this.props.path} component={this.props.component} />
        }
        return <Redirect to='/' />
    }
}