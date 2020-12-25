import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal/modal';
import NavBar from '../components/navbar/navbar';

import UserProfileContainer from './profile/user_profile_container';
import SplashContainer from '../components/splash_page/splash_container';
import BoardShowContainer from '../components/boards/board_show_container';
import CreatePinForm from "../components/pins/create_pin_form_container";


const App  = () => (
    <div className="app-component">
        <Modal />
        <header>
            <NavBar />
        </header>
        <Switch>
            <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer} />
            <ProtectedRoute exact path="/pin-builder" component={CreatePinForm}/>
            <ProtectedRoute exact path="/boards/:boardId" component={BoardShowContainer}/>
            <Route exact path="/" component={SplashContainer} />
        </Switch>
        {/* <footer>
            footer
        </footer> */}
    </div>
);

export default App;