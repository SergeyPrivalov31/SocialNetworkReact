import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer >
            {
            (store) => {
                let state = store.getState();
                let onAddPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return <MyPosts addPost={onAddPost} updateNewPostText={onPostChange}
                     posts={store.getState().profilePage.posts}
                     newPostText={store.getState().profilePage.newPostText}/>

            }
        }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer