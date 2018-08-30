import SigninUI from './SigninUI';
import { connect } from 'react-redux';
import { onSignIn } from '../../../actions/actionCreators';
import * as selectors from '../../../selectors/loginSelectors';



const mapPropToState = (state, props) => {
    const isSignInCompleted = selectors.getSignInStatus(state);
    const isSignInError = selectors.isSignInError(state);
    const isSignInPending = selectors.isSignInPending(state);
    const errorMessage = selectors.getSignInErrorMessage(state);
    return {
        isSignInCompleted,
        isSignInError,
        errorMessage,
        isSignInPending
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSignIn: (email, password) => {
            dispatch(onSignIn(email, password));
        }
    };
};

const SignIn = connect(
    mapPropToState,
    mapDispatchToProps
)(SigninUI);


export default SignIn;