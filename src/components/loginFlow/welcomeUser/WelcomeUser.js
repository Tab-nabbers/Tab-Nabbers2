import WelcomeUserUI from './WelcomeUserUI';
import { connect } from 'react-redux';
import { fetchGithubUserProfile, fetchGithubUserAccount } from '../../../actions//actionCreators';

const mapStateToProps = (state, props) => {

    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGithubProfile: (email) => {
            dispatch(fetchGithubUserProfile(email));
        },

        fetchGithubAccount: (url) => {
            dispatch(fetchGithubUserAccount(url));
        }
    };
};

const WelcomeUser = connect(
    mapStateToProps,
    mapDispatchToProps
)(WelcomeUserUI);


export default WelcomeUser;