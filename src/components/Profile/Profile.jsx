import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://tinypng.com/images/social/website.jpg"></img>
      </div>
      <div className={s.ava}>ava+discription</div>
      <textarea>Write the post</textarea>
      <botton>Confirm</botton>
      <MyPosts />
     
    </div>
  );
}
export default Profile