import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import Sidebar from '../../common/sidebar/Sidebar';
import Header from '../../common/header/Header';
import './profile.css';
export default class UserProfileUI extends Component {

    render() {
        return (
            <div className="edit-profile">
                <Header />
                <Sidebar {...this.props}/>
                <Form>
                    <Form.Field>
                        <label>Username</label>
                        <input placeholder='username' />
                    </Form.Field>


                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='email' />
                    </Form.Field>

                    <Form.Group grouped>
                        <label>Are you looking to be hired?</label>
                        <Form.Field label='Yes' control='input' type='radio' name='htmlRadios' />
                        <Form.Field label='yes' control='input' type='radio' name='htmlRadios' />
                    </Form.Group>

                    <Form.Field>
                        <label>Location</label>
                        <input placeholder='location' />
                    </Form.Field>


                    <Form.Field>
                        <label>Portfolio</label>
                        <input placeholder='portfolio' />
                    </Form.Field>

                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Bio'
                        placeholder='Bio'
                    />

                </Form>
            </div>
        );
    }
}