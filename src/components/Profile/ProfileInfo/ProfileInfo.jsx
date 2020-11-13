import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.wallpepper}
                     src="https://images.wallpaperscraft.ru/image/led_sneg_treshchiny_133131_2560x1080.jpg"/>
            </div>
            <div className={s.description}>Ava+description</div>
            <div className={s.textArea}> <textarea >Write the post</textarea>
            <button className={s.button}>Confirm</button></div>
        </div>
    );
}
export default ProfileInfo;