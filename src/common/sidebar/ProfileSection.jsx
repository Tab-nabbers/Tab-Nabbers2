import React from 'react';
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';

const ProfileSection = (props) => {
    return <SidebarSection title="Profile">
        <SidebarItem
            name="Edit"
            icon="edit"
            url="/profile/edit"
            {...props} />
        <SidebarItem
            name="Settings"
            icon="setting"
            {...props}
            url="/profile/settings" />
        <SidebarItem
            name="Integration"
            icon="qrcode"
            url="/profile/integrations"
            {...props} />
    </SidebarSection>
};

export default ProfileSection;