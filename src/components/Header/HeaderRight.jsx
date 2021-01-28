import React from 'react';
import s from './HeaderRight.module.css';
import {NavLink} from "react-router-dom";


const HeaderRight = (props) => {
    return (<header className={s.header} >
                 <div className={s.animation}>GET ANIMATION</div>
                 <div className={s.login}>
                            { props.isAuth
                                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                                : <NavLink to={'/login'}>Login</NavLink> }
                </div>
        </header>
    );
}
export default HeaderRight;