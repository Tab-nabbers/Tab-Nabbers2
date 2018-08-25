import React from 'react';
import {Icon} from 'semantic-ui-react';

const SidebarItem = (props) => {

    return (
        <div className="sidebar-section__item" onClick = {props.navigateTo}>
            <Icon name={props.icon}/>
            <p>{props.name}</p>
        </div>
    );
};

export default SidebarItem;
