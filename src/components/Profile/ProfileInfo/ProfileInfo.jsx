import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.ava_description}>
            <div className={s.ava}>
                <img src={props.profile.photos.small} alt={' '}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
            <div className={s.description}>
                <ul>{props.profile.fullName}</ul>
            </div>
        </div>
    )
}
export default ProfileInfo;