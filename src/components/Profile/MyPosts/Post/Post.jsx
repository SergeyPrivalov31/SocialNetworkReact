import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
   return (
    <div className={s.item}>
      <div>
        <img src='https://sun9-25.userapi.com/c639625/v639625595/51141/mmSXFmNkbU4.jpg?ava=1' />
        <span> {props.message} </span>
      </div>
      <div className={s.like}>
      <img src='https://media.istockphoto.com/vectors/logo-heart-illustrationred-heart-design-icon-flat-modern-flat-love-vector-id1095022948?k=6&m=1095022948&s=170667a&w=0&h=-jGcCNLSkLNZpU4VylJdQgeLI830TR8loHOPiNw6zfw='/> 
      {props.likesCount}
      </div>
    </div>
  );
}
export default Post