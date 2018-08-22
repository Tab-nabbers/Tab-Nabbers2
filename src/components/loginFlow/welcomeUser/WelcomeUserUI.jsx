import React, { Component } from 'react';

export default class WelcomeUser extends Component {

    componentDidMount = () => {
        const { email, fetchGithubProfile } = this.props;
        fetchGithubProfile(email || 'accimeesterlin@yahoo.com')
        
           
    };
    render() {
        return (
            <div>
                <h2>I am the Welcome New User Page</h2>
            </div>
        );
    }
}