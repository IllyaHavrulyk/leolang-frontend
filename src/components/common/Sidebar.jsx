import React, { useState } from 'react';
import "../../styles/Sidebar.scss";

import LogoDetails from './LogoDetails';
import NavItem from './NavItem';
import NavBar from './NavBar';

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

function Sidebar() {
  const [open, setOpen] = useState(false);
  const handleOpenMenuClick = () => {
    setOpen(!open);
  };
  return (
    <div className={`sidebar ${open ? 'open' : null}`}>
      <LogoDetails handleClick={handleOpenMenuClick} isMenuOpen={open} />
      <NavBar>
        {navItems.map((navItem) => (
          <NavItem
            icon={navItem.icon}
            shortName={navItem.shortName}
            name={navItem.name}
            key={Math.random()}
            isMenuOpen={open}
            itemRoute={navItem.itemRoute}
          />
        ))}

        <li>
          <i className="bx bx-search" />
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
        <li className="profile">
          <div className="profile-details">
            <i className="bx bx-user" />
            <div className="name_job">
              <div className="name">Username</div>
              <div className="job">Level</div>
            </div>
          </div>
          <i className="bx bx-log-out" id="log_out" />
        </li>
      </NavBar>
    </div>
  );
}

export default Sidebar;
