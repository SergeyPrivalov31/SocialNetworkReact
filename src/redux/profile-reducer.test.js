import React from 'react';
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {it} from "@jest/globals";

let state = {
    posts: [
        {id: 1, message: 'Hi everyone!', likesCount: 5},
        {id: 2, message: 'It is my first post', likesCount: 7},
        {id: 3, message: 'Hakuna Matata', likesCount: 52}
    ]
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("TestTextHere");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
    })

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("TestTextHere");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[3].message).toBe("TestTextHere");
})

it('length of posts after test should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(2);
})

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
})