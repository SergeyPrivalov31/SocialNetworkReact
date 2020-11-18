import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }
    return (
        <div className={s.content}>
            <h3>My Posts</h3>
            <div className={s.textArea}><textarea ref={newPostElement}>Write the post</textarea>
                <button onClick={addPost} className={s.button}>Add Post</button>
            </div>
            {postsElements}
        </div>
    )
}
export default MyPosts