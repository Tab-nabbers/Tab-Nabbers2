import React, { Component } from 'react';
import './addPortfolio.css';


import Sidebar from '../../../common/sidebar/Sidebar';
import Header from '../../../common/header/Header';
export default class AddPortfolioUI extends Component {

    render() {
        return (
            <div className="portfolio">
                <Header {...this.props}/>
                <Sidebar {...this.props}/>
                <div className="portfolio-add">
                    <h2>I am the Add Portfolio Component</h2>
                </div>
            </div>
        );
    }
};