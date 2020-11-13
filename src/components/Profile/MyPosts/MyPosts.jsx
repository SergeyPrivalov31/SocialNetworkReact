import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hi everyone!', likesCount: 5},
        {id: 2, message: 'It is my first post', likesCount: 7}
    ]
    return (
        <div className={s.content}>
            <h3>My Posts</h3>
            <Post message={postsData[0].message} likesCount={postsData[0].likesCount} id={postsData[0].id}/>
            <Post message={postsData[1].message} likesCount={postsData[1].likesCount} id={postsData[1].id}/>

        </div>
    )
}
export default MyPosts