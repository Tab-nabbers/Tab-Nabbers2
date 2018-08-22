import LoginUI from './LoginUI';
import { connect } from 'react-redux';
import * as routerSelectors from '../../selectors/routerSelectors';

const mapStateToProps  = (state, props) => {
    const params = routerSelectors.getParams(props);
    const isNewUser = params.user === 'newuser' ? true : false;

    return {
        isNewUser
    };
};

const mapDispatchToProps = () => {
    return {
        
    };
};

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginUI);


export default Login;