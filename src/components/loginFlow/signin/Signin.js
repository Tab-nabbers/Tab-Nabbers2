import SigninUI from './SigninUI';
import { connect } from 'react-redux';
import { onSignIn, getValue } from '../../../actions/actionCreators';
import * as selectors from '../../../selectors/loginSelectors';


import * as userSeletors from '../../../selectors/userSelectors';

const mapPropToState = (state, props) => {
    const isSignInCompleted = selectors.getSignInStatus(state);
    const isSignInError = selectors.isSignInError(state);
    const isSignInPending = selectors.isSignInPending(state);
    const errorMessage = selectors.getSignInErrorMessage(state);
    const email = userSeletors.getEmail(state);

    return {
        isSignInCompleted,
        isSignInError,
        errorMessage,
        isSignInPending,
        email
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSignIn: (email, password) => {
            dispatch(onSignIn(email, password));
        },
        getValue: (data) => {
            dispatch(getValue(data));
        }
    };
};

const SignIn = connect(
    mapPropToState,
    mapDispatchToProps
)(SigninUI);


export default SignIn;