import React from 'react';
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';

const ProfileSection = (props) => {
    return <SidebarSection title="Profile">
        <SidebarItem
            name="Edit"
            icon="edit"
            url="/profile"
            {...props} />
        <SidebarItem
            name="Settings"
            icon="setting"
            {...props}
            url="/setting" />
        <SidebarItem
            name="Integration"
            icon="qrcode"
            url="/integration"
            {...props} />
    </SidebarSection>
};

export default ProfileSection;