import React from "react";
import s from "./../Dialogs.module.css";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/State";

const Messages = (props) => {

    let messagesElements =
        props.messages.map(m => <Message message={m.message}/>)
    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={s.content}>
            <h3>Messages</h3>
            {messagesElements}
            <div className={s.textArea}>
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
                <div>
                    <button onClick={addMessage}
                            className={s.button}>Add Post
                    </button>
                </div>
            </div>
        </div>

    )
}
export default Messages