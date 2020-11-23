import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);
    }

    return (
        <div className={s.content}>
            <h3>My Posts</h3>
            <div className={s.textArea}>
                <textarea onChange={onPostChange}
                          ref={newPostElement} value={props.newPostText}/>
                <button onClick={addPost}
                        className={s.button}>Add Post</button>
            </div>
            {postsElements}
        </div>
    )
}
export default MyPosts