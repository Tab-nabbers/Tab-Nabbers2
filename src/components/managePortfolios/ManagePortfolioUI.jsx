import React, { Component } from 'react';
import SharePortfolio from './sharePortfolio/SharePortfolio';
import ViewPortfolio from './viewPortfolios/ViewPortfolio';
import FavoritePortfolio from './favoritePortfolio/FavoritePortfolio';
import AddPortfolio from './addPortfolio/AddPortfolio';

import './managePortfolio.css';

export default class ManagePortfolio extends Component {

    render() {

        const portfolioName = this.props.portfolioName;

        switch (portfolioName) {
            case 'share':
                return <SharePortfolio {...this.props} />;

            case 'view':
                return <ViewPortfolio {...this.props} />;

            case 'add':
                return <AddPortfolio {...this.props} />;

            case 'favorite':
                return <FavoritePortfolio {...this.props} />;

            default:
                return <p> No Route Found</p>;
        };
    }
};