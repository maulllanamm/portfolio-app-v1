import React from 'react';
import './Home.css';
import PropTypes from 'prop-types';
import Profile from '../../Components/Molecules/Profile';
import ProfilePicture from '../../Components/Molecules/ProfilePicture';

function Home(props) {
  return (
    <div className="home-container">
      <Profile />

      <ProfilePicture />
    </div>
  );
}

Home.propTypes = {};

export default Home;
