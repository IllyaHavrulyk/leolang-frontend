import React from 'react';
import PropTypes from 'prop-types';

function LogoDetails({ handleClick, isMenuOpen }) {
  return (
    <div className="logo-details">
      <i className="bx bxl-mastercard icon" />
      <div className="logo_name">LeoLang</div>
      <i
        className={`bx ${isMenuOpen ? 'bx-menu-alt-right' : 'bx-menu'}`}
        id="btn"
        onClick={handleClick}
        aria-hidden="true"
      />
    </div>
  );
}

LogoDetails.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default LogoDetails;
