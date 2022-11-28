import React from 'react';
import Card from '../../Components/Atoms/Card';
import Header from '../../Components/Molecules/Header';
import './Experience.css';

export default function Experience() {
  return (
    <>
      <div className="experience-container">
        <div className="experience-header">
          <Header title="Experience" subtitle="My experience detial" />
        </div>
        <div className="experience-parent">
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
      </div>
    </>
  );
}
