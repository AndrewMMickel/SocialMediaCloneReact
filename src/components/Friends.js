import React from 'react';
import Request from './Request';
import Avatar from './Avatar';

const masterRequestList = [
    {
        name: 'Tyler Bates'
    },
    {
        name: 'Ethan Firpo'
    },
    {
        name: 'A Speghett'
    }
];

const postAlign = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
}

function Friends() {
    return (
        <React.Fragment>
            <div class="request-list">
                <div class="request-header">
                    <strong><h4>Friend Requests</h4></strong>
                </div>
                <div class="lines">
                    <hr />
                </div>
                {masterRequestList.map((request, index) =>
                    <React.Fragment>
                        <div class="post-align" style={postAlign}>
                            <div class="request-avatar col-sm-6">
                                <Avatar />
                            </div>
                            <div class="request-item col-sm-6">
                                <Request
                                    name={request.name}
                                    key={index}
                                />
                                <button type="button" class="btn btn-primary">button</button>
                            </div>
                        </div>
                        <div class="lines">
                            <hr />
                        </div>
                    </React.Fragment>
                )}
            </div>
        </React.Fragment>
    );
}

export default Friends;