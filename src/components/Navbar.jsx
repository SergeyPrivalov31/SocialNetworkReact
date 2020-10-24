import React from 'react';
import s from './Navbar.module.css';

//console.log(s);

const Navbar = () => {
    return (
        <navbar className={s.nav}>
            <div className = {`${s.item} ${s.active}`}><a>Profile</a></div>
            <div className={s.item}><a>Messages</a></div>
            <div className={s.item}><a>News</a></div>
            <div className={s.item}><a>Music</a></div>
            <div className={s.item}><a>Settings</a></div>
        </navbar >
    );
}
export default Navbar;