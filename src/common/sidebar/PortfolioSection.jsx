import React from 'react';
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';

const ProfileSection = (props) => {
    return <SidebarSection title="Portfolio">
        <SidebarItem
            name="Add "
            icon="add"
            url="/portfolio/add"
            {...props} />
        <SidebarItem
            name="View "
            icon="eye"
            url="/portfolio/view"
            {...props} />
        <SidebarItem
            name="Favorite "
            icon="favorite"
            url="/portfolio/favorite"
            {...props} />
        <SidebarItem
            name="Share "
            icon="share"
            url="/portfolio/share"
            {...props} />
    </SidebarSection>
};

export default ProfileSection;