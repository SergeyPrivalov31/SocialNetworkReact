import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import s from './Users.module.css';

const Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {
	return (
		<div className={s.users}>
			<div><Paginator currentPage={currentPage} onPageChanged={onPageChanged}
				totalItemsCount={totalUsersCount} pageSize={pageSize} /></div>
			<div>
				{
					users.map(u => <User user={u}
						followingInProgress={props.followingInProgress}
						key={u.id}
						unfollow={props.unfollow}
						follow={props.follow}
					/>
					)
				}
			</div>
		</div>
	)
}

export default Users;