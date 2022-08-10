import React from 'react';
import AboutMe from './AboutMe';
import Photo from './Photo';

const profileStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  flexGrow: "1",
  textAlign: "center"
}
function Profile() {
  return (
    <React.Fragment>
      <div id="profile" style={profileStyles}>
        <Photo />
        <AboutMe />
      </div>
    </React.Fragment>
  );
}

export default Profile;