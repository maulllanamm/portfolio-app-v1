import React from 'react';
import PropTypes from 'prop-types';
import './AtomStyle.css';

function Item({ width, height, border, radius }) {
  return <div className="item"></div>;
}

Item.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
};

export default Item;
