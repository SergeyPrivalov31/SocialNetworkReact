import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.ava_description}>
            <div className={s.ava}>
                <img src={props.profile.photos.small} alt={' '}/>
                <ProfileStatus status={'aloha'} />
            </div>
            <div className={s.description}>
                <ul>{props.profile.fullName}</ul>
            </div>
        </div>
    )
}
export default ProfileInfo;