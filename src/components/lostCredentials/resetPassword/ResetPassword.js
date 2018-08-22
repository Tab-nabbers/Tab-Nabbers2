import ResetPasswordUI from './resetPasswordUI';
import { connect } from 'react-redux';



const mapPropToState  = () => {
    return {

    };
};

const mapDispatchPropsToState = () => {
    return {
        
    };
};

const ResetPassword = connect(
    mapPropToState,
    mapDispatchPropsToState
)(ResetPasswordUI);


export default ResetPassword;