import React from 'react';
import Profile from '../Molecules/Profile';
import ProfilePicture from '../Molecules/ProfilePicture';

export default function LandingPage() {
  return (
    <div className="landingpage-container">
      <Profile />
      <ProfilePicture />
    </div>
  );
}
