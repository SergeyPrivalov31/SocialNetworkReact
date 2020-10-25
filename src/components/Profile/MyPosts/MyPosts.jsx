import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <div className={s.content}>
      <div>My Posts</div>
      <Post message='Hi everyone!' count={5} />
      <Post message='It is my first post' count={3} />
    </div>
  );

}
export default MyPosts