import HomePageUI from './HomePageUI';
import { connect } from 'react-redux';

const mapPropsToState  = () => {
    return {

    };
};

const mapDispatchToProps = () => {
    return {
        
    };
};

const HomePage = connect(
    mapPropsToState,
    mapDispatchToProps
)(HomePageUI);


export default HomePage;