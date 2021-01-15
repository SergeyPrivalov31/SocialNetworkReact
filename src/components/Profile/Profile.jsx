import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={s.wallpepper}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />

        </div>
    );
}
export default Profile