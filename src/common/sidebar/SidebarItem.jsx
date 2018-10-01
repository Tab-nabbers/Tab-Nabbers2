import React from 'react';
import { Icon } from 'semantic-ui-react';

const SidebarItem = (props) => {
    console.log('Props: ', props);
    const { activeItem, url } = props;
    const activeClass = activeItem === url ? 'active' : '';
    return (
        <div className={`sidebar-section__item ${activeClass}`} onClick={() => props.navigateToPage(url)}>
            <Icon name={props.icon} />
            <p>{props.name}</p>
        </div>
    );
};

export default SidebarItem;
