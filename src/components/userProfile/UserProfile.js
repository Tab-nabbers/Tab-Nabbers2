import UserProfileUI from './UserProfileUI';
import * as selectors from '../../selectors/userSelectors';
import { getValue } from '../../actions/actionCreators';
import { connect } from 'react-redux';

const mapPropToState = (state) => {

    const {
        getBio,
        getEmail,
        getName,
        getPicture,
        getWebsite,
        getLocation,
        getUsername,
        isHireable
    } = selectors;

    const bio = getBio(state);
    const email = getEmail(state);
    const picture = getPicture(state);
    const username = getUsername(state);
    const name = getName(state);
    const website = getWebsite(state);
    const userLocation = getLocation(state);
    const isHire = isHireable(state);

    return {
        bio,
        email,
        picture,
        username,
        name,
        website,
        userLocation,
        isHire
    };
};

const mapDispatchPropsToState = (dispatch) => {
    return {
        getValue: (data) => {
            dispatch(getValue(data));
        }
    };
};

const UserProfile = connect(
    mapPropToState,
    mapDispatchPropsToState
)(UserProfileUI);


export default UserProfile;