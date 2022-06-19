import React from 'react';
import './Posts.css'
import posts from '../Data/posts'
import Post from '../Post/Post';
const Posts = () => {

    return (
        <div className='posts'>
            {
                posts.map((post)=>(
                    <Post post={post} key={post.id} ></Post>
                ))}
        </div>
    );
};

export default Posts;