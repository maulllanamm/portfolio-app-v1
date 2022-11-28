import React from 'react';
import ButtonHighlighted from '../Atoms/ButtonHighlited';
import ButtonPrimary from '../Atoms/ButtonPrimary';
import './Molecules.css';

export default function Profile() {
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
              <h1>
                <section class="animation">
                  <div class="first">
                    <div>Web Developer</div>
                  </div>
                  <div class="second">
                    <div>Frontend Developer</div>
                  </div>
                  <div class="third">
                    <div>Backend Developer</div>
                  </div>
                </section>
              </h1>
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
