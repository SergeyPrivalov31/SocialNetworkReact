import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/dialogItem";
import Messages from "./Messages/messages";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <Messages messages={props.dialogsPage.messages}
                          newMessageText={props.dialogsPage.newMessageText}
                          dispatch={props.dispatch}/>
            </div>
        </div>
    )
}

export default Dialogs