import React, { Component } from 'react';

import Sidebar from '../../../common/sidebar/Sidebar';
import Header from '../../../common/header/Header';

export default class SharePortfolioUI extends Component {

    render() {
        return (
            <div className="portfolio">
                <Header {...this.props} />
                <Sidebar {...this.props} />
                <div className="portfolio-share">
                    <h2>I am the Share Component</h2>
                </div>

            </div>
        );
    }
};