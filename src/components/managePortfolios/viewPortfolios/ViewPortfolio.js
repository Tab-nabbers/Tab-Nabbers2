import ViewPortfolioUI from './ViewPortfolioUI';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {

    return {
    };
};

const mapDispatchToProps = () => {
    return {

    };
};

const ViewPortfolio = connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewPortfolioUI);


export default ViewPortfolio;