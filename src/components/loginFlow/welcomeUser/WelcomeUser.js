import WelcomeUserUI from './WelcomeUserUI';
import { connect } from 'react-redux';
import { fetchGithubUserProfile, reviewAndConfirm } from '../../../actions//actionCreators';
import { getValue } from '../../../actions/actionCreators';
import * as userSelectors from '../../../selectors/userSelectors';

const mapStateToProps = (state, props) => {
    const { 
        getPicture, 
        getWebsite, 
        getBio, 
        getName, 
        getPublicRepo, 
        isHireable,
        getLocation,
        getUsername,
        getEmail,
        getUser,
        isUserAuthenticated
    } = userSelectors;

    const photo = getPicture(state);
    const bio = getBio(state);
    const hireable = isHireable(state);
    const name = getName(state);
    const publicRepo = getPublicRepo(state);
    const portfolioWebsite = getWebsite(state);
    const userLocation = getLocation(state);
    const username = getUsername(state);
    const email = getEmail(state);
    const user = getUser(state);
    const isAuthenticated = isUserAuthenticated(state);
    

    return {
        photo,
        userLocation,
        username,
        bio,
        email,
        hireable,
        name,
        publicRepo,
        portfolioWebsite,
        user,
        isAuthenticated
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGithubProfile: (email) => {
            dispatch(fetchGithubUserProfile(email));
        },
        getValue: (data) => {
            dispatch(getValue(data));
        },

        reviewAndSubmit: (user) => {
            dispatch(reviewAndConfirm(user))
        }
    };
};

const WelcomeUser = connect(
    mapStateToProps,
    mapDispatchToProps
)(WelcomeUserUI);


export default WelcomeUser;