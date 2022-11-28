import React from 'react';
import LandingPage from '../../Components/Organism/LandingPage';
import './Home.css';

function Home(props) {
  return (
    <>
      <div className="home-container">
        <LandingPage />
      </div>
    </>
  );
}

Home.propTypes = {};

export default Home;
