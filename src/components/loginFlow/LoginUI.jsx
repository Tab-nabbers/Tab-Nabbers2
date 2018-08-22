import React, { Component } from 'react';
import SignUp from './signup/Signup';
import SignIn from './signin/Signin';


export default class LoginUI extends Component {

    render() {
        const isNewUser = this.props.isNewUser;
        return(
            <div>
                { isNewUser ? <SignUp /> : <SignIn /> }
            </div>
        );
    }
};