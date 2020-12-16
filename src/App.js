import React from 'react';
import './App.css';
import {Route} from "react-router";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderRight from "./components/Header/HeaderRight";
import Friends from "./components/Friends/Friends";

const App = (props) => {
    debugger;
    return (
        <div className='app-wrapper'>
            <Header/>
            <HeaderRight/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path='/profile'
                       render = { () => <Profile
                       profilePage={props.state.profilePage}
                       dispatch={props.dispatch}/>}/>

                <Route path ='/dialogs'
                       render = { () => <Dialogs
                       dialogsPage = {props.state.dialogsPage}
                       dispatch = {props.dispatch}/>}/>

                <Route path='/News' component={News}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Settings' component={Settings}/>

                <Route path='/Friends'
                       render = { () => <Friends
                       state={props.state.users}/>}/>
            </div>
        </div>
    )
}

export default App


