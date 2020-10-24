import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
          <img src="https://tinypng.com/images/social/website.jpg"></img>
        </div>
        <div className={s.ava}> ava + description</div>
        <div className={s.posts}> My posts
          <div className={s.post}> New posts
            <div className={s.item}> Post 1</div>
            <div className={s.item}> Post 2</div>
          </div>
        </div>
      </div>
    );
}
export default Profile