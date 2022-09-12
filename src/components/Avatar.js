import React from 'react';

function Avatar() {
    const avatarStyles = {
        width: "4vw",
        height: "auto"
    };
    return (
        <img class="avatar" style={avatarStyles} src="https://i.dailymail.co.uk/i/pix/2014/09/19/1411087218778_wps_28_myspace_tom_8_Las_Vegas_A.jpg" alt="" />
    );
}

export default Avatar;