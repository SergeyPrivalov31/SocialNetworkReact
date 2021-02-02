import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLengthCreator10 = maxLengthCreator(10)

const AddNewPostsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name="newPostText"
            validate={[required, maxLengthCreator10]}/>
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>

}

let AddPostsFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostsForm);

const MyPosts = React.memo (props => {
    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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
});

export default MyPosts