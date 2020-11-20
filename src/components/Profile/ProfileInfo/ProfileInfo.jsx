import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            {/*<div>
                <img className={s.wallpepper}
                     src=""/>
            </div>*/}
            <div className={s.description}>Ava+description</div>
        </div>
    );
}
export default ProfileInfo;