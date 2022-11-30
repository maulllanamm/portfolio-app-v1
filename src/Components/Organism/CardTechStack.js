import React from 'react';
import CardSkills from '../Molecules/CardSkills';
import './Organism.css';

export default function CardTechStack() {
  return (
    <div className="cardtechstack-container">
      <div className="cardtechstack-body">
        <div className="cardtechstack-box">
          <div className="cardtechstack-title">Frontend Dev</div>
          <div className="cardtechstack-element">
            <CardSkills icons="html" tech="html" experience="Experience" />
            <CardSkills icons="css" tech="CSS" experience="Experience" />
            <CardSkills
              icons="javascript"
              tech="Javascript"
              experience="Experience"
            />
            <CardSkills
              icons="tailwind"
              tech="Tailwind CSS"
              experience="Experience"
            />
            <CardSkills
              icons="bootstrap"
              tech="Bootstrap"
              experience="Experience"
            />
          </div>
        </div>
        <div className="cardtechstack-box">
          <div className="cardtechstack-title">Backend Dev</div>
          <div className="cardtechstack-element">
            <CardSkills
              icons="express"
              tech="Express Js"
              experience="Experience"
            />
            <CardSkills icons="node" tech="Node Js" experience="Experience" />
            <CardSkills icons="mysql" tech="MySQL" experience="Experience" />
            <CardSkills
              icons="mongodb"
              tech="MongooDB"
              experience="Experience"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
