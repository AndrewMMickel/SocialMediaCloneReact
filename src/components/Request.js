import React from "react";
import PropTypes from "prop-types";

function Request(props) {
    return (
        <React.Fragment>
            <div class="request">
                <strong><p>{props.name}</p></strong>
            </div>
        </React.Fragment>
    );
}

Request.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Request;