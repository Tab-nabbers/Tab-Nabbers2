import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { Input, Button, TextArea, Form } from 'semantic-ui-react';
import './WelcomeUser.css';

export default class WelcomeUser extends Component {

    componentDidMount = () => {
        const { email, fetchGithubProfile, userLocation, getLocation } = this.props;
        fetchGithubProfile(email);

        if (!userLocation) {
            getLocation();
        }
    };

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.props.getValue({ [name]: value });
    };

    onSubmit = (event) => {
        event.preventDefault(); // stop browser default behavior
        const user = this.props.user;
        this.props.reviewAndSubmit(user); 
    };


    render() {
        const { portfolioWebsite, bio, photo, userLocation, username, isAuthenticated } = this.props;

        console.log('Props: ', this.props);
        if (isAuthenticated) {
            return <Redirect to = '/dashboard'/>
        }
        return (
            <Form className="welcome-user" onSubmit={this.onSubmit}>
                <img src={photo} alt="" />

                <Form.Field>
                    <label>Username</label>
                    <Input
                        placeholder='accimeesterlin'
                        value={username}
                        required
                        onChange={this.handleChange}
                        name="githubUsername" />
                </Form.Field>


                <Form.Field>
                    <label>Location</label>
                    <Input
                        placeholder='Atlanta, GA'
                        value={userLocation}
                        onChange={this.handleChange}
                        required
                        name="location" />
                </Form.Field>


                <Form.Field>
                    <label>Portfolio</label>
                    <Input
                        placeholder='http://www.google.com'
                        value={portfolioWebsite}
                        required
                        onChange={this.handleChange}
                        name="website" />
                </Form.Field>

                <div>
                    <label htmlFor="bio">Bio</label>
                    <TextArea
                        placeholder='Tell us more'
                        value={bio}
                        required
                        onChange={this.handleChange}
                        name="bio" />
                </div>

                <Button>Review and Confirm</Button>
            </Form>
        );
    }
}