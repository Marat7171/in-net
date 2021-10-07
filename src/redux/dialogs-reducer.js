
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi', from: 'outgoing'},
        {id: 2, message: 'Hi, im cool', from: 'incoming'},
        {id: 3, message: 'Buy!', from: 'incoming'},
        {id: 4, message: 'To', from: 'outgoing'},
        {id: 5, message: 'Do', from: 'outgoing'},
        {id: 6, message: 'Yo', from: 'outgoing'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let toFrom
            if (Math.random() > 0.5) {
                toFrom = 'outgoing';
            } else {
                toFrom = 'incoming';
            }
            let body = {
                id: 7,
                message: action.newMessageBody,
                from: toFrom
            };
            return {
                ...state,
                messages: [...state.messages, body]
            };

        }

        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;