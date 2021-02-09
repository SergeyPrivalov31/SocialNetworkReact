import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user-photo.png"

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    return (
        <div className={s.ava_description}>
            <div>
                <img className={s.ava} src={props.profile.photos.large || userPhoto} alt={' '}/>
                { props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
            <div className={s.description}>
                <ul>{props.profile.fullName}</ul>
            </div>
        </div>
    )
}
export default ProfileInfo;