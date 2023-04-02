import React from 'react';
import navItemStyles from '../styles/navItem.module.css'

const NavItem = ({ icon, shortName, name, itemRoute, isOpen }) => {
  return (
    <button className={navItemStyles.navItem}>
      <i className={`bx ${icon} ${navItemStyles.logo}`} />
      <span className={`${navItemStyles.label} ${isOpen ? navItemStyles.opened : null}`}>{shortName}</span>
    </button>
  );
};

export default NavItem;
