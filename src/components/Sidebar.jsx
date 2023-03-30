import React from 'react'
import sidebarStyles from '../styles/sidebar.module.css';
import LogoDetails from './LogoDetails';
import NavBar from './NavBar';
import NavItem from './NavItem';

const navItems = [
    { icon: 'bx-user', shortName: 'User', name: 'User', itemRoute: '/user' },
    { icon: 'bx-grid-alt', shortName: 'Dashboard', name: 'Dashboard', itemRoute: '/dashboard' },
    { icon: 'bx-chat', shortName: 'Messages', name: 'Messages', itemRoute: '/messages' },
    { icon: 'bx-pie-chart-alt-2', shortName: 'Analytics', name: 'Analytics', itemRoute: '/analytics' },
    { icon: 'bx-folder', shortName: 'Files', name: 'File system', itemRoute: '/files' },
    { icon: 'bx-cart-alt', shortName: 'Order', name: 'Order', itemRoute: '/order' },
    { icon: 'bx-heart', shortName: 'Saved', name: 'Saved', itemRoute: '/saved' },
    { icon: 'bx-cog', shortName: 'Setting', name: 'Setting', itemRoute: '/setting' },
  ];

function Sidebar({isOpen, handleOpen}) {
    return (
        <div className={sidebarStyles.sidebar}>
            <LogoDetails
                isOpen={isOpen}
                handleOpen={handleOpen}    
            />
            <NavBar>
            {navItems.map((navItem) => (
                <NavItem
                    icon={navItem.icon}
                    shortName={navItem.shortName}
                    name={navItem.name}
                    key={navItem.shortName}
                    itemRoute={navItem.itemRoute}
                />
            ))}
            </NavBar>
        </div>
    )
}

export default Sidebar;