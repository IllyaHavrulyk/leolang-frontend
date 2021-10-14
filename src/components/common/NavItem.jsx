import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';

const NavItem = ({ icon, shortName, name, itemRoute }) => {
  const { pathname } = useLocation();
  return (
    <li>
      <Link to={`${itemRoute}`} className={`${pathname === itemRoute ? 'active' : null}`}>
        <i className={`bx ${icon}`} />
        <span className="links_name">{shortName}</span>
      </Link>
      <span className="tooltip">{name}</span>
    </li>
  );
};

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  shortName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  itemRoute: PropTypes.string.isRequired,
};

export default NavItem;
