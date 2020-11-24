import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
   return (
    <div className={s.item}>
      <div>
        <img src='https://nbnews.com.ua/wp-content/uploads/2020/06/maxresdefault-7-700x394.jpg' alt={' '}/>
        <span> {props.message} </span>
      </div>
    </div>
  );
}
export default Message;