import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal/modal';
import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer'

import UserProfileContainer from './profile/user_profile_container';
import SplashContainer from '../components/splash_page/splash_container';
import BoardShowContainer from '../components/boards/board_show_container';
import CreatePinContainer from "../components/pins/create_pin_container";
import PinShowContainer from "./pins/pin_show_container";
import HomeContainer from "./home/home_container";
import PinIndexSearchContainer from '../components/pins/pin_index_search_container';


const App  = () => (
    <div className="app-component">
        <Modal />
        <header>
            <NavBar />
        </header>
        <Switch>
            <Route exact path="/" component={SplashContainer}/>
            <Route exact path="/search" component={PinIndexSearchContainer}/>
            <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer} />
            <ProtectedRoute exact path="/pins" component={CreatePinContainer}/>
            <ProtectedRoute exact path="/pins/:pinId" component={PinShowContainer}/>
            <ProtectedRoute exact path="/boards/:boardId" component={BoardShowContainer}/>
            <Route exact path="/" component={HomeContainer} /> 
        </Switch>
        <footer>
            <Footer/>
        </footer>
    </div>
);

export default App;