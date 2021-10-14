import React from 'react';
import PropTypes from 'prop-types';

function NavBar({ children }) {
  return <ul className="nav-list">{children}</ul>;
}

NavBar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default NavBar;
