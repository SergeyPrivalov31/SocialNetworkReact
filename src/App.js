import React from 'react';
import './App.css';
import { Redirect, Route, Switch, withRouter } from "react-router";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderRightContainer from "./components/Header/HeaderRightContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import { BrowserRouter, HashRouter } from "react-router-dom";
import withSuspense from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		//пока компонента инициализируется, показываем крутилку,
		// как только пропсы изменяться, изменяться данные,
		// initialized будет true. Вернём всё остальное

		return (
			<div className='app'>
				<div className='app-wrapper'>
					<Header />
					<HeaderRightContainer />
					<Navbar />

					<div className='app-wrapper-content'>
						<Switch>
							<Route exact path='/' render={() => <Redirect to={'/profile'} />} />
							<Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
							<Route path='/dialogs' render={withSuspense(DialogsContainer)} />
							<Route path='/News' component={News} />
							<Route path='/Music' component={Music} />
							<Route path='/Settings' component={Settings} />
							<Route path='/users' render={() => <UsersContainer />} />
							<Route path='/login' render={() => <Login />} />
							<Route path='*' render={() => <div>404 NOT FOUND</div>} />
						</Switch>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

const AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = () => {
	return <HashRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</HashRouter>
}

export default SamuraiJSApp;