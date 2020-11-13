import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.wallpepper}
                     src="https://storge.pic2.me/upload/827/5416b7a89a859.jpg"/>
            </div>
            <div className={s.description}>Ava+description</div>
            <div className={s.textArea}> <textarea >Write the post</textarea>
            <button className={s.button}>Confirm</button></div>
        </div>
    );
}
export default ProfileInfo;