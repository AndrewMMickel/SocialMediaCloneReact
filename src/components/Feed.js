import React from 'react';
import Post from './Post';
import Avatar from './Avatar';

const masterPostList = [

];

const feedInput = {

}
const inputForm = {

}
const feed = {

}
const postAlign = {

}
const postItem = {

}
const avatarFeed = {

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