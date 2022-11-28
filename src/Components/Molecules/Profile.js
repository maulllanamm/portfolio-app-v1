import React, { useEffect } from 'react';
import ButtonPrimary from '../Atoms/ButtonPrimary';
import ButtonHighlighted from '../Atoms/ButtonHighlited';
import Typed from 'typed.js';
import './Molecules.css';

export default function Profile() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Web Developer 🔥',
        'Frontend Developer 💻',
        'Backend Developer 🌐',
      ],
      typeSpeed: 100,
      backSpeed: 50,
      showCursor: false,
      loop: false,
      loopCount: Infinity,
    };

    typed.current = new Typed(el.current, options);
  });
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-detail">
          <div className="profile-detail-name">
            <span className="primary-text">
              Hi, I am <span className="highlight-text">Maulana Muhammad</span>
            </span>
          </div>
          <div className="profile-detail-role">
            <span className="primary-text">
              <h1 style={{ whiteSpace: 'pre' }} ref={el}></h1>
              <span className="profile-role-tagline">
                Build and Develop frontend & backend web application. <br />I
                can help everyone build their business. <br /> it`s such a
                happiness for me. so, let me help you!
              </span>
            </span>
          </div>
          <div className="profile-options">
            <ButtonPrimary title="Hire Me" />
            <a href="CV-MaulanaMuhammad.pdf" download="CV Maulana Muhammad.pdf">
              <ButtonHighlighted title="Get Resume" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
