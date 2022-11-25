import React from 'react';
import PropTypes from 'prop-types';
import './AtomStyle.css';

export default function ButtonHighlighted({ title }) {
  return (
    <button className="btn highlighted-btn" type="button">
      {title}
    </button>
  );
}

ButtonHighlighted.propTypes = {
  title: PropTypes.string.isRequired,
};
