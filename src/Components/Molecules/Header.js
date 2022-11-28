import React from 'react';
import PropTypes from 'prop-types';
import HeaderLine from '../Atoms/HeaderLine';

function Header({ title, subtitle }) {
  return (
    <div className="header-container">
      <div className="header-parent">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <HeaderLine />
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Header;
