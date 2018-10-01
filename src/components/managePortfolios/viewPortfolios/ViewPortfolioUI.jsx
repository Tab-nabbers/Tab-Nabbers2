import React, { Component } from 'react';

import Sidebar from '../../../common/sidebar/Sidebar';
import Header from '../../../common/header/Header';

export default class ViewPortfolioUI extends Component {

    render() {
        return (
            <div className="portfolio">
                <Header {...this.props} />
                <Sidebar {...this.props} />
                <div className="portfolio-view">
                    <h2>I am the View Portfolio</h2>
                </div>
            </div>
        );
    }
};