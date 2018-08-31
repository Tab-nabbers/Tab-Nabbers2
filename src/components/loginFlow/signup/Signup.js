import SignUpUI from './SignUpUI';
import { connect } from 'react-redux';
import { onSignUp, getValue } from '../../../actions/actionCreators';
import * as selectors from '../../../selectors/loginSelectors';
import * as userSeletors from '../../../selectors/userSelectors';

const mapStateToProps = (state, props) => {
    const isSignUpCompleted = selectors.getSignUpStatus(state);
    const isSignUpError = selectors.isSignUpError(state);
    const isSignUpPending = selectors.isSignUpPending(state);
    const errorMessage = selectors.getSignUpErrorMessage(state);
    const email = userSeletors.getEmail(state);
    
    return {
        isSignUpCompleted,
        isSignUpError,
        isSignUpPending,
        errorMessage,
        email
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSignUp: (email, name, password) => {
            dispatch(onSignUp(email, name, password));
        },
        getValue: (data) => {
            dispatch(getValue(data));
        }
    };
};

const SignUp = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpUI);


export default SignUp;