import React from 'react';
import Header from '../../Components/Molecules/Header';
import './Techstack.css';

export default function Techstack() {
  return (
    <div className="techstack-container">
      <div className="techstack-header">
        <Header title="Tech Stack" subtitle="Stack" />
      </div>
      <div className="techstack-body"></div>
    </div>
  );
}
