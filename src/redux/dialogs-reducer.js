const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    newMessageBody: "Write now!",
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: 4, message: state.newMessageBody};
            state.messages.push(newMessage);
            state.newMessageBody = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText;
            return state;
        default:
            return state;
    }
}
export default dialogsReducer;

export const sendMessageCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageBodyCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newText: text})