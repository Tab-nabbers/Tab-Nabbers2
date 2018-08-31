import React, { Component } from 'react';



import { Form, Button, Message } from 'semantic-ui-react';



import { Link, Redirect } from 'react-router-dom';
import './SigninUI.css';
export default class SigninUI extends Component {

    constructor() {
        super();

        this.state = {};
    };

    onSubmit = (event) => {
        event.preventDefault();
        const { password } = this.state;
        const { email } = this.props;
        this.props.onSignIn(email, password);
    };

    onHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
        this.props.getValue({ [name]: value });
    };


    displayErrors = () => {
        const { isSignInError, errorMessage } = this.props;
        if (isSignInError) {
            return <Message color='red'> {errorMessage}  </Message>;
        }
    };
    render() {
        const { isSignInCompleted } = this.props;
        if (isSignInCompleted) {
            return <Redirect to="/dashboard" />;
        }
        return (
            <Form className="signin" onSubmit={this.onSubmit}>
                <div className="signin-tabs">
                    <Link to="/login/existeduser" >Login</Link>
                    <Link to="/login/newuser">Join</Link>
                </div>
                <Form.Field>
                    <label htmlFor="">Email</label>
                    <input
                        placeholder="johndoe@hotmail.com"
                        type="email"
                        required
                        name="email"
                        onChange={this.onHandleChange} />
                </Form.Field>

                <Form.Field>
                    <label htmlFor="">Password (min. 6 char)</label>
                    <input
                        placeholder="password"
                        type="password"
                        name="password"
                        required
                        onChange={this.onHandleChange} />
                </Form.Field>

                {this.displayErrors()}

                <Link to="/manage/password">Forgot Password</Link>
                <Button> Submit </Button>
            </Form>
        );
    }
}