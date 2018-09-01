import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import Sidebar from '../../common/sidebar/Sidebar';
import Header from '../../common/header/Header';
import './profile.css';
export default class UserProfileUI extends Component {

    onHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.props.getValue({
            [name]: value
        });
    };

    logout = () => {
        window.localStorage.clear();
        this.props.history.replace('/');
    };

    render() {
        const { 
            bio,
            email,
            picture,
            username,
            name,
            website,
            userLocation,
            isHire
        } = this.props;

        return (
            <div className="edit-profile">
                <Header logout={this.logout}/>
                <Sidebar {...this.props} />
                <Form>
                    <Form.Field>
                        <label>Name</label>
                        <input placeholder='Name' value={name} name="name" onChange={this.onHandleChange}/>
                    </Form.Field>

                    <Form.Field>
                        <label>Username</label>
                        <input placeholder='username' value={username} name="username" onChange={this.onHandleChange}/>
                    </Form.Field>


                    <Form.Field>
                        <label>Github User</label>
                        <input placeholder='githubUser' name="githubUser" onChange={this.onHandleChange}/>
                    </Form.Field>


                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='email' name="email" value={email} onChange={this.onHandleChange}/>
                    </Form.Field>

                    <Form.Group grouped>
                        <label>Are you looking to be hired?</label>
                        <Form.Field label='Yes' control='input' type='radio' name='htmlRadios' />
                        <Form.Field label='yes' control='input' type='radio' name='htmlRadios' />
                    </Form.Group>

                    <Form.Field>
                        <label>Location</label>
                        <input placeholder='location' name="location" value={userLocation} onChange={this.onHandleChange}/>
                    </Form.Field>


                    <Form.Field>
                        <label>Portfolio</label>
                        <input placeholder='portfolio' name="website" value={website} onChange={this.onHandleChange}/>
                    </Form.Field>

                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        name="bio"
                        label='Bio'
                        placeholder='Bio'
                        value={bio}
                        onChange={this.onHandleChange}
                    />



                </Form>
            </div>
        );
    }
}