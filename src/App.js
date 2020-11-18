import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
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
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <HeaderRight/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile' component={() => <Profile state={props.state.profilePage}/>}/>
                    <Route path='/Dialogs' component={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                    <Route path='/Friends' render={() => <Friends state={props.state.users}/>}/>
                </div>
            </div>
        </BrowserRouter>);
}
export default App


