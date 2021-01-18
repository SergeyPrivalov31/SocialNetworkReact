import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.ava_description}>
            <div className={s.ava}>
                <img src={props.profile.photos.large} alt={' '}/>
            </div>
            <div className={s.description}>
                <ul>{props.profile.fullName}
                    <li>
                        {props.profile.contacts.vk}
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default ProfileInfo;