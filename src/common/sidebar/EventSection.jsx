import React from 'react';
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';

const ProfileSection = (props) => {
    return <SidebarSection title="Events">
        <SidebarItem
            name="Search "
            icon="search"
            url="/event/search"
            {...props} />
        <SidebarItem
            name="Favorite "
            icon="favorite"
            url='/event/favorite'
            {...props} />
        <SidebarItem
            name="Manage "
            icon="tasks"
            url="/event/manage"
            {...props} />
        <SidebarItem
            name="My events "
            icon="calendar alternate"
            url="/event/myevents"
            {...props} />
        <SidebarItem
            name="Next Week "
            icon="clock"
            url="/event/nextweek"
            {...props} />
    </SidebarSection>
};

export default ProfileSection;