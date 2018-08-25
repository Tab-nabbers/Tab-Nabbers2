import React from 'react';
import SidebarItem from './SidebarItem';


const SidebarSectionUI = (props) => {

    return (
        <section className="sidebar-section">
            <h2>{props.title}</h2>
            {props.children}
        </section>
    );
};

export default SidebarSectionUI;

