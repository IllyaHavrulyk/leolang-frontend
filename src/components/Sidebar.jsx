import React from 'react'
import sidebarStyles from '../styles/sidebar.module.css';
import LogoDetails from './LogoDetails';

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
        </div>
    )
}

export default Sidebar;