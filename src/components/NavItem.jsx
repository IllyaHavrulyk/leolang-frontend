import React from 'react';
import navItemStyles from '../styles/navItem.module.css'

const NavItem = ({ icon, shortName, name, itemRoute }) => {
  return (
    <button className={navItemStyles.navItem}>
      <i className={`bx ${icon} ${navItemStyles.logo}`} />
      <span className={navItemStyles.label}>{shortName}</span>
    </button>
  );
};

export default NavItem;
