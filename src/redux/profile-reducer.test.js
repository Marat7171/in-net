import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'My name is Nikita', likesCount: 1},
        {id: 2, message: 'Hi, Nikita', likesCount: 5},
        {id: 3, message: 'Hi, Nikita', likesCount: 10},
        {id: 4, message: 'Hi, Nikita', likesCount: 15},
        {id: 5, message: 'Hi, Nikita', likesCount: 20},
        {id: 6, message: 'Hi, Nikita', likesCount: 25}
    ],
};

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra.com');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(7);
});

test('message of new posts should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra.com');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[6].message).toBe('it-kamasutra.com');
});

test('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(6);
});


