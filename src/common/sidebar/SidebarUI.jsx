import React, { Component } from 'react';
import ProfileSection from './ProfileSection';
import PortfolioSection from './PortfolioSection';
import EventSection from './EventSection';
import './Sidebar.css';



export default class SidebarUI extends Component {

    state = {
        activeItem: this.props.match.url || '/event/search'
    };

    navigateToPage = (url) => {
        this.props.history.push(url);
        this.setState({ activeItem: url });
    };



    render() {
        
        return (
            <div className="sidebar">

                <EventSection
                    navigateToPage={this.navigateToPage}
                    activeItem={this.state.activeItem}
                />

                <PortfolioSection
                    navigateToPage={this.navigateToPage}
                    activeItem={this.state.activeItem}
                />

                <ProfileSection
                    activeItem={this.state.activeItem}
                    navigateToPage={this.navigateToPage}
                />

            </div>
        );
    }
};