const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {

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
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            };

        default:
            return state;
    }
}
export default dialogsReducer;

export const sendMessageCreator = (newMessageBody) =>
    ({type: ADD_MESSAGE, newMessageBody})
