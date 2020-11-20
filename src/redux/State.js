let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
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
    users: [
        {id: 1, name: 'Serhio'},
        {id: 2, name: 'Olyalya'},
        {id: 3, name: 'Dashunya'}
    ]
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}
export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state