import React from 'react';
import Card from '../Atoms/Card';
import './Organism.css';

export default function CardExperience() {
  return (
    <div className="cardexperience-container">
      <Card
        title="Web Developer"
        position="Intern"
        date="June 2021 - July 2021"
      />
      <Card
        title="Fullstack Developer"
        position="Full time"
        date="July 2022 - November 2022"
      />
      <Card
        title="Fullstack Developer"
        position="Bootcamp"
        date="July 2022 - September 2022"
      />
    </div>
  );
}
