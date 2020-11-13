import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>

        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Serhio" id="1"/>
                <DialogItem name="Olyalya" id="2"/>
                <DialogItem name="Dashunya" id="3"/>
                <DialogItem name="Yanki" id="4"/>
                <DialogItem name="Pupkin" id="5"/>
                <DialogItem name="Artem" id="6"/>
                <DialogItem name="Roman" id="7"/>
            </div>


            <div className={s.messages}>
                <Message message="Hallo!!!"/>
                <Message message="I am very glad to see you!!!"/>
                <Message message="It is so fun"/>
            </div>
        </div>
    )
}

export default Dialogs