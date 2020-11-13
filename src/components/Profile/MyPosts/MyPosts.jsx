import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <div className={s.content}>
      <h3>My Posts</h3>
      <Post message='Hi everyone!' likesCount='5' />
      <Post message='It is my first post' likesCount='7' />
    </div>
  );

}
export default MyPosts