import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            newPostText: "ALOHA",
            posts: [
                {id: 1, message: 'Hi everyone!', likesCount: 5},
                {id: 2, message: 'It is my first post', likesCount: 7},
                {id: 3, message: 'Hakuna Matata', likesCount: 52}
            ]
        },
        dialogsPage: {
            newMessageText: "Write now!",
            dialogs: [
                {id: 1, name: 'Serhio'},
                {id: 2, name: 'Olyalya'},
                {id: 3, name: 'Dashunya'},
                {id: 4, name: 'Yanki'},
                {id: 5, name: 'Pupkin'},
                {id: 6, name: 'Artem'},
                {id: 7, name: 'Roman'}
            ],
            messages: [
                {id: 1, message: 'Hallo!!!'},
                {id: 2, message: 'I am very glad to see you!!!'},
                {id: 3, message: 'It is so fun'}
            ]
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.DialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state);
    }
};

export default store;


/*addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        debugger
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    }*/