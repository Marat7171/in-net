// let rerenderEntireTree = () => {
//     console.log('State changed');
// }
// let state = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'My name is Nikita', likesCount: 1},
//             {id: 2, message: 'Hi, Nikita', likesCount: 5},
//             {id: 3, message: 'Hi, Nikita', likesCount: 10},
//             {id: 4, message: 'Hi, Nikita', likesCount: 15},
//             {id: 5, message: 'Hi, Nikita', likesCount: 20},
//             {id: 6, message: 'Hi, Nikita', likesCount: 25}
//         ],
//         newPostText: "I am like In Net!"
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Dimych'},
//             {id: 2, name: 'Andrey'},
//             {id: 3, name: 'Sveta'},
//             {id: 4, name: 'Sasha'},
//             {id: 5, name: 'Viktor'},
//             {id: 6, name: 'Valera'}
//         ],
//         messages: [
//             {id: 1, message: 'Hi', from: 'outgoing'},
//             {id: 2, message: 'Hi, im cool', from: 'incoming'},
//             {id: 3, message: 'Buy!', from: 'incoming'},
//             {id: 4, message: 'To', from: 'outgoing'},
//             {id: 5, message: 'Do', from: 'outgoing'},
//             {id: 6, message: 'Yo', from: 'outgoing'}
//         ],
//         newMessage: 'Ok'
//     },
//     sitebar: {
//         friends: [
//             {
//                 id: 1,
//                 name: "Andrew",
//                 link: "https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/d49a024e7ade40858a10df3b8976625d.png"
//             },
//             {id: 2, name: "Sasha", link: "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},
//             {id: 3, name: "Sveta", link: "https://uprostim.com/wp-content/uploads/2021/01/image206-14.jpg"}
//
//         ]
//     }
// }
//
// export const addMessage = () => {
//     let toFrom
//     if (Math.random() > 0.5) {
//         toFrom = 'outgoing';
//     } else {
//         toFrom = 'incoming';
//     }
//     let add = {
//         id: 7,
//         message: state.dialogsPage.newMessage,
//         from: toFrom
//     };
//     state.dialogsPage.messages.push(add);
//     state.dialogsPage.newMessage = '';
//     rerenderEntireTree(state);
// }
//
// export const updateNewMessageText = (newMessage) => {
//     state.dialogsPage.newMessage = newMessage;
//     rerenderEntireTree(state);
// }
//
// export const addPost = () => {
//     let newPost = {
//         id: 7,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state);
// }
//
// export const updateNewPostText = (newText) => {
//
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// }
//
// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// };


import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'My name is Nikita', likesCount: 1},
                {id: 2, message: 'Hi, Nikita', likesCount: 5},
                {id: 3, message: 'Hi, Nikita', likesCount: 10},
                {id: 4, message: 'Hi, Nikita', likesCount: 15},
                {id: 5, message: 'Hi, Nikita', likesCount: 20},
                {id: 6, message: 'Hi, Nikita', likesCount: 25}
            ],
            newPostText: "I am like In Net!"
        },
        dialogsPage: {
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
            ],
            newMessageBody: 'Ok'
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: "Andrew",
                    link: "https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/d49a024e7ade40858a10df3b8976625d.png"
                },
                {id: 2, name: "Sasha", link: "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},
                {id: 3, name: "Sveta", link: "https://uprostim.com/wp-content/uploads/2021/01/image206-14.jpg"}

            ]
        }
    },

    _callSubscriber() {
        console.log('no subscribers(observers)');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) { // { type: 'ADD-POST' }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
}

window.store = store;
export default store;