import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img className={s.wallpepper}
                     src="https://img3.akspic.ru/previews/1/3/6/8/98631/98631-plyazh-pribrezhnyye_i_okeanicheskiye_relyefy-karibskij_bassejn-tropicheskaya_zona-komnata-x750.jpg"/>
                <div className={s.description}>
                    <div className={s.ava}>
                        <img src={props.profile.photos.large}/>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default ProfileInfo;