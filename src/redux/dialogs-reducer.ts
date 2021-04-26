const ADD_MESSAGE = 'ADD-MESSAGE';

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Serhio'},
        {id: 2, name: 'Olyalya'},
        {id: 3, name: 'Dashunya'},
        {id: 4, name: 'Yanki'},
        {id: 5, name: 'Pupkin'},
        {id: 6, name: 'Artem'},
        {id: 7, name: 'Roman'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hallo!!!'},
        {id: 2, message: 'I am very glad to see you!!!'},
        {id: 3, message: 'It is so fun'}
    ] as Array<MessageType>
}

export type InitialStateType = typeof initialState


const dialogsReducer = (state = initialState, action: any): InitialStateType => {

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

export type SendMessageCreatorActionType = {
    type: typeof ADD_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({type: ADD_MESSAGE, newMessageBody})
