import React from 'react';
import ProfilePic from '../../Assets/Image/pas-foto.png';
import Icons from '../Atoms/Icons';
import './Molecules.css';

export default function ProfilePicture() {
  return (
    <div className="profile-picture-container">
      <div className="profile-picture">
        <div className="profile-icon">
          <div className="react-icon">
            <Icons icons="react" />
          </div>
          <div className="node-icon">
            <Icons icons="node" />
          </div>
          <div className="php-icon">
            <Icons icons="php" />
          </div>
        </div>
        <img src={ProfilePic} alt="profile-pic" />
      </div>
    </div>
  );
}
