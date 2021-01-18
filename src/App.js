import React from 'react';
import './App.css';
import {Route} from "react-router";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderRight from "./components/Header/HeaderRight";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <HeaderRight/>
            <Navbar/>

            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/News' component={News}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Settings' component={Settings}/>
                <Route path='/users' render={() => <UsersContainer />} />
            </div>
        </div>
    )
}

export default App


