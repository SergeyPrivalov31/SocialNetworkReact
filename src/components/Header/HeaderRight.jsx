import React from 'react';
import s from './HeaderRight.module.css';
import {NavLink} from "react-router-dom";


const HeaderRight = (props) => {
    return (<div className={s.header} >
                 <div className={s.animation}>GET ANIMATION</div>
                 <div className={s.login}>
                            {props.isAuth ? props.login
                            : <NavLink to={'/login'}>Login</NavLink>}
                </div>
        </div>
    );
}
export default HeaderRight;