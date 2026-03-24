// components/Profiles.js
import React from 'react';
import Profile from './Profile';

function Profiles({ profiles }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {profiles.map((profile) => (
        <Profile key={profile.id} profile={profile} />
      ))}
    </div>
  );
}

export default Profiles;