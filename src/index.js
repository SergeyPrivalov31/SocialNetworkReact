import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: 1, name: 'Serhio'},
    {id: 2, name: 'Olyalya'},
    {id: 3, name: 'Dashunya'},
    {id: 4, name: 'Yanki'},
    {id: 5, name: 'Pupkin'},
    {id: 6, name: 'Artem'},
    {id: 7, name: 'Roman'}
]

let messages = [
    {id: 1, message: 'Hallo!!!'},
    {id: 2, message: 'I am very glad to see you!!!'},
    {id: 3, message: 'It is so fun'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'yo'},
    {id: 6, message: 'yoooo'},
    {id: 7, message: 'yoooooouuu'}
]

let posts = [
    {id: 1, message: 'Hi everyone!', likesCount: 5},
    {id: 2, message: 'It is my first post', likesCount: 7},
    {id: 3, message: 'Hakuna Matata', likesCount: 52}
]

ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts}/>,
    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

