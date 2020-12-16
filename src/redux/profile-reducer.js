const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    newPostText: "ALOHA",
    posts: [
        {id: 1, message: 'Hi everyone!', likesCount: 5},
        {id: 2, message: 'It is my first post', likesCount: 7},
        {id: 3, message: 'Hakuna Matata', likesCount: 52}
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {id: 5, message: state.newPostText, likesCount: 0};
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}
export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});