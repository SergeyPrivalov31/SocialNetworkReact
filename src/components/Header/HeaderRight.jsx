import React from 'react';
import s from './HeaderRight.module.css';
import {NavLink} from "react-router-dom";


const HeaderRight = (props) => {
    return (<div className={s.header}>
            { props.isAuth ? props.login
            : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    );
}
export default HeaderRight;