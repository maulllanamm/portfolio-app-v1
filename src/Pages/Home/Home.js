import React from 'react';
import LandingPage from '../../Components/Organism/LandingPage';
import Wave2 from '../../Assets/Image/wave2.svg';
import './Home.css';

function Home(props) {
  return (
    <div className="home-container">
      <LandingPage />
      <img src={Wave2} alt="" />
    </div>
  );
}

Home.propTypes = {};

export default Home;
