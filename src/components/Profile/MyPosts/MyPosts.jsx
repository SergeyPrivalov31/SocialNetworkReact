import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.content}>
            My Posts
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