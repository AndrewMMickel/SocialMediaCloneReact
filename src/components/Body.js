import React from 'react';
import Profile from './Profile';
import Feed from './Feed';
import Friends from './Friends';

const bodyStyles = {
    width: "70%",
    margin: "1% auto",
    display: "flex",
    justifyContent: "space-between"
}

function Body() {
    return (
        <React.Fragment>
            <div id="body" style={bodyStyles}>
                <Profile />
                <Feed />
                <Friends />
            </div>
        </React.Fragment>
    );
}

export default Body;