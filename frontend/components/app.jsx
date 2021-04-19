import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal/modal';
import NavBar from '../components/navbar/navbar';

import UserProfileContainer from './profile/user_profile_container';
import BoardShowContainer from '../components/boards/board_show_container';
import CreatePinContainer from "../components/pins/create_pin_form_container";
import PinShowContainer from "./pins/pin_show_container";
import HomeContainer from "./home/home_container";
import PinIndexSearchContainer from './pins/pin_search_container';

const App  = () => (
    <div className="app-component">
        <Modal />
        <header>
            <NavBar />
        </header>
        <Switch>
            <Route exact path="/search" component={PinIndexSearchContainer}/>
            <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer} />
            <ProtectedRoute exact path="/pin-builder" component={CreatePinContainer}/>
            <ProtectedRoute exact path="/pin/:pinId" component={PinShowContainer}/>

            <ProtectedRoute exact path="/boards/:boardId" component={BoardShowContainer}/>
            <ProtectedRoute exact path="/following" component={HomeContainer} />
            <Route exact path="/" component={HomeContainer} /> 
        </Switch>
        <footer>
        </footer>
    </div>
);

export default App;