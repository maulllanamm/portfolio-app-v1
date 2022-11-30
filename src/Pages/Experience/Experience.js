import React from 'react';
import Wave1 from '../../Assets/Image/wave1.svg';
import Header from '../../Components/Molecules/Header';
import CardExperience from '../../Components/Organism/CardExperience';
import './Experience.css';

export default function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-header">
        <Header title="Experience" subtitle="My experience detial" />
      </div>
      <div className="experience-body">
        <CardExperience />
      </div>
      <img src={Wave1} alt="Wave1" />
    </div>
  );
}
