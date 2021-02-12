import React from 'react';
import s from './Post.module.css';
import image from '../../../../assets/images/lunatiki.png';
const Post = (props) => {
   return (
    <div className={s.item}>
      <div>
        <img src={image} />
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