import React from 'react';
import Blob1 from '../../Assets/Image/blob1.svg';
import Blob2 from '../../Assets/Image/blob2.svg';
import ProfilePic from '../../Assets/Image/pas-foto.png';
import NodeIcon from '../Atoms/NodeIcon';
import PhpIcon from '../Atoms/PhpIcon';
import ReactIcon from '../Atoms/ReactIcon';
import './Molecules.css';

export default function ProfilePicture() {
  return (
    <>
      <div className="profile-icon">
        <div className="react-icon">
          <ReactIcon />
        </div>
        <div className="node-icon">
          <NodeIcon />
        </div>
        <div className="php-icon">
          <PhpIcon />
        </div>
      </div>
      <div className="profile-picture">
        {/* <img src={Blob1} alt="blob1" />
      <img src={Blob2} alt="blob2" /> */}
        <img src={ProfilePic} alt="profile-pic" />
      </div>
    </>
  );
}
