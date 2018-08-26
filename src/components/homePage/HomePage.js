import HomePageUI from './HomePageUI';
import { connect } from 'react-redux';

const mapPropsToState  = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
};

const HomePage = connect(
    mapPropsToState,
    mapDispatchToProps
)(HomePageUI);


export default HomePage;