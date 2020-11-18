import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "../Friends/Sidebar/Sidebar";
const Navbar = (props) => {
    return (
        <navbar className={s.nav}>
            <div>
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
            </div>

            <sidebar>
                <h3 className={s.item}>
                    <NavLink to="Friends" activeClassName={s.active}>Friends</NavLink>

                </h3>
                <Sidebar />

            </sidebar>
        </navbar>
    );
}
export default Navbar;