import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    /*let posts = [
        {id: 1, message: 'Hi everyone!', likesCount: 5},
        {id: 2, message: 'It is my first post', likesCount: 7},
        {id: 3, message: 'Hakuna Matata', likesCount: 52}
    ]*/
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
}
export default Profile