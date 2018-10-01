import React, { Component } from 'react';
import SharePortfolio from './sharePortfolio/SharePortfolio';
import ViewPortfolio from './viewPortfolios/ViewPortfolio';
import FavoritePortfolio from './favoritePortfolio/FavoritePortfolio';
import AddPortfolio from './addPortfolio/AddPortfolio';

import Sidebar from '../../common/sidebar/Sidebar';
import Header from '../../common/header//Header';

export default class ManagePortfolio extends Component {

    render() {

        const portfolioName = this.props.portfolioName;

        switch (portfolioName) {
            case 'share':
                return <div>
                    <Header />
                    <Sidebar {...this.props} />
                    <SharePortfolio {...this.props} />;
                </div>

            case 'view':
                return <div>
                    <Header />
                    <Sidebar {...this.props} />
                    <ViewPortfolio {...this.props} />
                </div>;

            case 'add':
                return <div>
                    <Header />
                    <Sidebar {...this.props} />
                    <AddPortfolio {...this.props} />
                </div>;

            case 'favorite':
                return <div>
                    <Header />
                    <Sidebar {...this.props} />
                    <FavoritePortfolio {...this.props} />
                </div>;

            default:
                return <p> No Route Found</p>;
        };
    }
};