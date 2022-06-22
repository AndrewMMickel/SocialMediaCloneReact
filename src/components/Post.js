import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
    return (
        <React.Fragment>
            <strong><p>{props.title}</p></strong>
            <p>{props.body}</p>
        </React.Fragment>
    );
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default Post;