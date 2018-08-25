import React, { Component } from 'react';
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';
import './Sidebar.css';



export default class SidebarUI extends Component {
    
    navigateToPage = (url) => {
        this.props.history.push(url);
    };

    
    render() {
        return (
            <div className="sidebar">

                <SidebarSection title = "Events">
                    <SidebarItem 
                        name="Search " 
                        icon="search" 
                        navigateTo = {() => this.navigateToPage('/event/search')}/>
                    <SidebarItem 
                        name="Favorite " 
                        icon="favorite" 
                        navigateTo = {() => this.navigateToPage('/event/favorite')} />
                    <SidebarItem 
                        name="Manage " 
                        icon="tasks"
                        navigateTo = {() => this.navigateToPage('/event/manage')} />
                    <SidebarItem 
                        name="My events " 
                        icon="calendar alternate"
                        navigateTo = {() => this.navigateToPage('/event/myevents')} />
                    <SidebarItem 
                        name="Next Week " 
                        icon="clock"
                        navigateTo = {() => this.navigateToPage('/events/nextweek')} />
                </SidebarSection>

                <SidebarSection title = "Portfolio">
                    <SidebarItem 
                        name="Add " 
                        icon="add"
                        navigateTo = {() => this.navigateToPage('/portfolio/add')} />
                    <SidebarItem 
                        name="View " 
                        icon="eye"
                        navigateTo = {() => this.navigateToPage('/portfolio/view')} />
                    <SidebarItem 
                        name="Favorite " 
                        icon="favorite"
                        navigateTo = {() => this.navigateToPage('/portfolio/favorite')} />
                    <SidebarItem 
                        name="Share " 
                        icon="share"
                        navigateTo = {() => this.navigateToPage('/portfolio/share')} />
                </SidebarSection>

                <SidebarSection title = "Profile">
                    <SidebarItem 
                        name="Edit" 
                        icon="edit"
                        navigateTo = {() => this.navigateToPage('/profile/edit')} />
                    <SidebarItem 
                        name="Settings" 
                        icon="setting"
                        navigateTo = {() => this.navigateToPage('/profile/settings')} />
                    <SidebarItem 
                        name="Integration" 
                        icon="qrcode"
                        navigateTo = {() => this.navigateToPage('/profile/integrations')} />
                </SidebarSection>

            </div>
        );
    }
};