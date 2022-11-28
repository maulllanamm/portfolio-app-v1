import React from 'react';
import './AtomStyle.css';
import { BiCodeAlt } from '@react-icons/all-files/bi/BiCodeAlt';
import PropTypes from 'prop-types';

function Card({ title, position, date }) {
  return (
    <div className="card">
      <BiCodeAlt size={90} />
      <h3>{title}</h3>
      <p>{position}</p>
      <p>{date}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Card;
