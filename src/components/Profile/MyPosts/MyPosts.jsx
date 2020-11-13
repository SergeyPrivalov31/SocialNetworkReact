import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi everyone!', likesCount: 5},
        {id: 2, message: 'It is my first post', likesCount: 7},
        {id: 3, message: 'Hakuna Matata', likesCount: 52}
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.content}>
            <h3>My Posts</h3>
            {postsElements}
        </div>
    )
}
export default MyPosts