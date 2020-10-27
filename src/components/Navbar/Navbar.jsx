import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

//console.log(s);

const Navbar = () => {
    return (
        <navbar className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="Profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="Dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="News" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="Music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="Settings" activeClassName={s.active}>Settings</NavLink>
            </div>
        </navbar>
    );
}
export default Navbar;