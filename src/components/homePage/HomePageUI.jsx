import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default class LoginUI extends Component {
    render() {
        return (
            <div className="homepage">
                <h2>Welcome to Tab Nabbers</h2>
                <p>
                    Your porfolio is the most valuable piece of information towards 
                    finding your dream job, why not be able to share it with event attendees?
                </p>

                <div className="homepage-buttons">
                    <Link to = "/login/newuser">Sign Up</Link>
                    <Link to = "/login/existeduser">Sign In</Link>
                </div>
            </div>
        );
    }
};