import ViewPortfolioUI from './ViewPortfolioUI';
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

const ViewPortfolio = connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewPortfolioUI);


export default ViewPortfolio;