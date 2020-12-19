import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRpute } from '../util/route_util';

import Modal from './modal/modal';
import NavBar from '../components/navbar/navbar';


import UserProfileContainer from './profile/user_profile_container';
import SplashContainer from '../components/splash_page/splash_container';


const App  = () => (
    <div className="app-component">
        <Modal />
        <header>
            {/* <NavBar /> */}
            <Route path="/" component={NavBar} />
        </header>
        <Switch>
            {/* <ProtectedRpute /> */}
            {/* <ProtectedRpute exact path="/" component={CreateBoard}/> */}
            <Route exact path="/" component={SplashContainer} />
        </Switch>
        {/* <footer>
            footer
        </footer> */}
    </div>
);

export default App;