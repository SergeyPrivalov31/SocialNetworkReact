import React from "react";
import s from "./../Dialogs.module.css";
import Message from "./Message/Message";

const Messages = (props) => {

    let messagesElements =
        props.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.content}>
            <h3>Messages</h3>
            <div className={s.textArea}>
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
                <button onClick={addMessage}
                        className={s.button}>Add Post</button>
            </div>
            {messagesElements}
        </div>

    )
}
export default Messages