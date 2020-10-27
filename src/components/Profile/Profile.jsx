import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
  return (
    <div>
      <div>
        <img className={s.wallpepper} src="https://tinypng.com/images/social/website.jpg"></img>
      </div>
      <div className={s.ava}>ava+discription</div>
      <textarea>Write the post</textarea>
      <button className={s.button}>Confirm</button>
      <MyPosts />
     
    </div>
  );
}
export default Profile