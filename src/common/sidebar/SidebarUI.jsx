import React, { Component } from 'react';
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';
import './Sidebar.css';


export default class SidebarUI extends Component {
    render() {
        return (
            <div className="sidebar">

                <SidebarSection title = "Events">
                    <SidebarItem name="Search " icon="search" />
                    <SidebarItem name="Favorite " icon="favorite" />
                    <SidebarItem name="Manage " icon="tasks" />
                    <SidebarItem name="My events " icon="calendar alternate" />
                    <SidebarItem name="Next Week " icon="clock" />
                </SidebarSection>

                <SidebarSection title = "Portfolio">
                    <SidebarItem name="Add " icon="add" />
                    <SidebarItem name="View " icon="eye" />
                    <SidebarItem name="Favorite " icon="favorite" />
                    <SidebarItem name="Share " icon="share" />
                </SidebarSection>

                <SidebarSection title = "Profile">
                    <SidebarItem name="Edit" icon="edit" />
                    <SidebarItem name="Settings" icon="setting" />
                    <SidebarItem name="Integration" icon="qrcode" />
                </SidebarSection>

            </div>
        );
    }
};