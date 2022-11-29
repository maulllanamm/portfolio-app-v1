import React from 'react';
import { FaReact } from '@react-icons/all-files/fa/FaReact';
import { FaNodeJs } from '@react-icons/all-files/fa/FaNodeJs.esm';
import { DiPhp } from '@react-icons/all-files/di/DiPhp';

export default function Icons({ icons }) {
  if (icons === 'react') {
    return (
      <div className="icons">
        <FaReact size={40} color="#38bdf8" />
      </div>
    );
  } else if (icons === 'node') {
    return (
      <div className="icons">
        <FaNodeJs size={40} color="#89BB3C" />
      </div>
    );
  } else {
    return (
      <div className="icons">
        <DiPhp size={40} color="#4B568C" />
      </div>
    );
  }
}
