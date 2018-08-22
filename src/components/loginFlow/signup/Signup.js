import SignUpUI from './SignUpUI';
import { connect } from 'react-redux';
import { onSignUp } from '../../../actions/actionCreators';
import * as selectors from '../../../selectors/loginSelectors';

const mapStateToProps = (state, props) => {
    const isSignUpCompleted = selectors.getSignUpStatus(state);
    
    return {
        isSignUpCompleted
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSignUp: (email, name, password) => {
            dispatch(onSignUp(email, name, password));
        }
    };
};

const SignUp = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpUI);


export default SignUp;