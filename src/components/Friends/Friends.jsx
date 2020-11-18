import React from "react";
import s from "./Friends.module.css";
import UserItem from "./UserItem/UserItem";

const Friends = (props) => {

   /*let usersElements = props.state
       .map(u => <UserItem name={u.name} id={u.id} />)*/
    return (
        <div className={s.friends}>
            Friends
            {/*{usersElements}*/}
        </div>
    )
}

export default Friends;