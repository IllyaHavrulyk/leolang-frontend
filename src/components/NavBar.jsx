import React from 'react';
import navbarStyles from '../styles/navBar.module.css'

function NavBar({ children }) {
  return <div className={navbarStyles.navList}>{children}</div>;
}
export default NavBar;
