import React from 'react';



const photoStyles = {
    border: "1px solid #666666",
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    marginBottom: "5%"
}

const bgPhotoStyles = {
    backgroundColor: "#69a9f0",
    color: "#69a9f0",
    height: "50%"
}

const selfPhotoStyles = {
    marginLeft: "2%",
    marginTop: "5%",
    justifySelf: "center",
    position: "absolute",
}

const mainAvStyle = {
    width: "9vw",
    height: "auto",
    border: "3px solid #FFFFFF"
}

function Photo() {
    return (
        <React.Fragment>
            <div id='photo' style={photoStyles}>
                <div id='bg-photo' style={bgPhotoStyles}>

                </div>
                <div id='self-photo' style={selfPhotoStyles}>
                    <img id="main-avatar" style={mainAvStyle} src="https://i.dailymail.co.uk/i/pix/2014/09/19/1411087218778_wps_28_myspace_tom_8_Las_Vegas_A.jpg" alt="" />

                </div>
                <p><span id="name" >Tom From MySpace</span></p>
                <div>
                    <span id="photo-links"><p>Friends Followers Folololol</p></span>
                </div>
            </div>


        </React.Fragment >
    );
}
export default Photo;