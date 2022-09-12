import React from 'react';
import Post from './Post';
import Avatar from './Avatar';


const masterPostList = [
    {
        title: 'Title',
        body: 'Hey this is great!'
    },
    {
        title: 'Title',
        body: 'Look at us.'
    },
    {
        title: 'Title',
        body: "who'd a thought."
    },
    {
        title: 'Title',
        body: 'not me.'
    }
];

const feedInput = {
    textAlign: 'left',
    width: '70%',
    height: '40px',
    border: '1px solid #69a9f0'
}
const inputForm = {
    textAlign: 'right',
    backgroundColor: '#69a9f0',
    padding: '3%'
}
const feed = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    border: '1px solid #666666',
    flexGrow: '3',
    margin: '0 2%'
}
const postAlign = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
}
const postItem = {
    textAlign: 'center',
    display: 'inline',
    margin: '2%',
    flexDirection: 'column',
}

const avatarFeed = {
    float: 'left',
    width: 'auto',
    height: 'auto',
    margin: '1%',
    marginLeft: '3%',
}

function PostList() {
    return (
        <React.Fragment>
            <div id="feed" style={feed}>
                <form class="input-form" style={inputForm}>
                    <input class="feed-input" style={feedInput} type='text' name='post' placeholder="What's happening?" />
                </form>
                <div class="lines">
                    <hr />
                </div>
                {masterPostList.map((post, index) =>
                    <React.Fragment>
                        <div class="post-align" style={postAlign}>
                            <div class="avatar-feed col-sm-6" style={avatarFeed}>
                                <Avatar />
                            </div>
                            <div class="post-item col-sm-6" style={postItem}>
                                <Post
                                    title={post.title}
                                    body={post.body}
                                    key={index}
                                />
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

export default PostList;