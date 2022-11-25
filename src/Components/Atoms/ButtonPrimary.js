import React from 'react';
import PropTypes from 'prop-types';

function ButtonPrimary({ title }) {
  return (
    <button className="btn primary-btn" type="button">
      {title}
    </button>
  );
}

ButtonPrimary.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ButtonPrimary;
