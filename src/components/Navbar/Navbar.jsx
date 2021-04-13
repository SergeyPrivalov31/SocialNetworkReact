import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className={s.flex}>
			<div className={s.nav}>
				<div>
					<div className={s.item}>
						<NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
					</div>
					<div className={`${s.item} ${s.active}`}>
						<NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
					</div>
					<div className={s.item}>
						<NavLink to="/news" activeClassName={s.active}>News</NavLink>
					</div>
					<div className={s.item}>
						<NavLink to="/music" activeClassName={s.active}>Music</NavLink>
					</div>
					<div className={s.item}>
						<NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
					</div>
				</div>
				<h3 className={s.item}>
					<NavLink to="/users" activeClassName={s.active}>Users</NavLink>
				</h3>
			</div>
		</div>
	);
}
export default Navbar;