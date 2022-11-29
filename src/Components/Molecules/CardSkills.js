import React from 'react';
import './Molecules.css';
import PropTypes from 'prop-types';
import Icons from '../Atoms/Icons';

function CardSkills({ icons, tech, experience }) {
  return (
    <div className="cardskill-container">
      <div className="cardskill-body">
        <div className="cardskill-icon">
          <Icons icons={icons} />
        </div>
        <div className="cardskill-skill">
          <h4>{tech}</h4>
          <p>{experience}</p>
        </div>
      </div>
    </div>
  );
}

CardSkills.propTypes = {
  icons: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
};

export default CardSkills;
