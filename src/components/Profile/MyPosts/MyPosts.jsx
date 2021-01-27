import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const AddNewPostsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea" name="newPostText"/>
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>

}

let AddPostsFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostsForm);

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={s.content}>
            My Posts
            <AddPostsFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts