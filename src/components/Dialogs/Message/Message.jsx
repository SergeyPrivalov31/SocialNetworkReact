import React from 'react';
import s from './Message.module.css';
import image from '../../../assets/images/lunatiki.png'
const Message = (props) => {
   return (
    <div className={s.item}>
      <div>
        <img src={image} alt={' '}/>
        <span> {props.message} </span>
      </div>
    </div>
  );
}
export default Message;