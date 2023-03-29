import React from 'react';
import logoStyles from '../styles/logoDetails.module.css';
import '../styles/logoDetails.module.css';

function LogoDetails({isOpen, handleOpen}) {
  console.log(isOpen, handleOpen)
  return (
    <div className={logoStyles.details}>
        <div className={`${logoStyles.wrapper} ${isOpen ? logoStyles.opened : null}`}>
        <i className={`bx bxl-mastercard icon ${logoStyles.icon}`} />
        <span className={logoStyles.logoName}>LeoLang</span>
      </div>
      <i
        className={`bx ${isOpen ? 'bx-menu-alt-right' : 'bx-menu'} ${logoStyles.icon}`}
        id="btn"
        onClick={handleOpen}
        aria-hidden="true"
      />
    </div>
  );
}

export default LogoDetails;
