import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderRight from "./components/Header/HeaderRight";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <HeaderRight/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile' render={() => <Profile state={props.state.profilePage}/>}/>
                    <Route path='/Dialogs' render={() => <Dialogs state={props.state.dialogsPage}
                                                                  state={props.state.dialogsPage}/>}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>);
}
export default App


