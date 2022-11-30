import React from 'react';
import { FaReact } from '@react-icons/all-files/fa/FaReact';
import { FaNodeJs } from '@react-icons/all-files/fa/FaNodeJs.esm';
import { BsBootstrap } from '@react-icons/all-files/bs/BsBootstrap.esm';
import { RiCss3Line } from '@react-icons/all-files/ri/RiCss3Line.esm';
import { AiOutlineHtml5 } from '@react-icons/all-files/ai/AiOutlineHtml5.esm';
import { DiPhp } from '@react-icons/all-files/di/DiPhp';
import { DiJavascript1 } from '@react-icons/all-files/di/DiJavascript1.esm';
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss.esm';
import { SiMysql } from '@react-icons/all-files/si/SiMysql.esm';
import { SiMongodb } from '@react-icons/all-files/si/SiMongodb.esm';
import Express from '../../Assets/Image/express.svg';

export default function Icons({ icons }) {
  switch (icons) {
    case 'html':
      return (
        <div className="icons">
          <AiOutlineHtml5 size={40} color="#E77042" />
        </div>
      );
      break;
    case 'css':
      return (
        <div className="icons">
          <RiCss3Line size={40} color="#2760E5" />
        </div>
      );
      break;
    case 'javascript':
      return (
        <div className="icons">
          <DiJavascript1 size={40} color="#F2C93D" />
        </div>
      );
      break;
    case 'react':
      return (
        <div className="icons">
          <FaReact size={40} color="#38bdf8" />
        </div>
      );
      break;
    case 'tailwind':
      return (
        <div className="icons">
          <SiTailwindcss size={40} color="#37B4EB" />
        </div>
      );
      break;
    case 'bootstrap':
      return (
        <div className="icons">
          <BsBootstrap size={40} color="#7710ED" />
        </div>
      );
      break;
    case 'php':
      return (
        <div className="icons">
          <DiPhp size={40} color="#7710ED" />
        </div>
      );
      break;
    case 'node':
      return (
        <div className="icons">
          <FaNodeJs size={40} color="#89BB3C" />
        </div>
      );
      break;
    case 'mysql':
      return (
        <div className="icons">
          <SiMysql size={40} color="#fff" />
        </div>
      );
      break;
    case 'mongodb':
      return (
        <div className="icons">
          <SiMongodb size={40} color="#118B4B" />
        </div>
      );
      break;
    case 'express':
      return (
        <div className="icons">
          <img
            src={Express}
            width="40px"
            style={{ backgroundColor: 'white' }}
            alt=""
          />
        </div>
      );
      break;

    default:
      break;
  }

  // if (icons === 'react') {
  //   return (
  //     <div className="icons">
  //       <FaReact size={40} color="#38bdf8" />
  //     </div>
  //   );
  // } else if (icons === 'node') {
  //   return (
  //     <div className="icons">
  //       <FaNodeJs size={40} color="#89BB3C" />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="icons">
  //       <DiPhp size={40} color="#4B568C" />
  //     </div>
  //   );
  // }
}
