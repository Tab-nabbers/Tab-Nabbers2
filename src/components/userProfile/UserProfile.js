import UserProfileUI from './UserProfileUI';
import { connect } from 'react-redux';

const mapPropToState  = () => {
    return {

    };
};

const mapDispatchPropsToState = () => {
    return {
        
    };
};

const UserProfile = connect(
    mapPropToState,
    mapDispatchPropsToState
)(UserProfileUI);


export default UserProfile;