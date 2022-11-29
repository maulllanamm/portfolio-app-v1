import React from 'react';
import CardSkills from '../Molecules/CardSkills';
import './Organism.css';

export default function CardTechStack() {
  return (
    <div className="cardtechstack-container">
      <div className="cardtechstack-body">
        <div className="cardtechstack-title">Frontend Dev</div>
        <div className="cardtechstack-element">
          <CardSkills icons="react" tech="React" experience="Experience" />
          <CardSkills icons="node" tech="Node Js" experience="Experience" />
          <CardSkills icons="php" tech="php" experience="Experience" />
          <CardSkills icons="react" tech="React" experience="Experience" />
          <CardSkills icons="node" tech="Node Js" experience="Experience" />
          <CardSkills icons="php" tech="php" experience="Experience" />
        </div>
      </div>
      <div className="cardtechstack-body">
        <div className="cardtechstack-title">Frontend Dev</div>
        <div className="cardtechstack-element">
          <CardSkills tech="React" experience="Experience" />
        </div>
      </div>
    </div>
  );
}
