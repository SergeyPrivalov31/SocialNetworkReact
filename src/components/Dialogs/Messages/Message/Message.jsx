import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
   return (
    <div className={s.item}>
      <div>
        <img src=' ' />
        <span> {props.message} </span>
      </div>
    </div>
  );
}
export default Message;