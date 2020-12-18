import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRpute } from '../util/route_util';

import Modal from './modal/modal';
import NavBar from '../components/navbar/navbar';


import UserProfileContainer from './profile/user_profile_container';


const App  = () => (
    <div className="app-component">
        <Modal/>
        <header>
            <NavBar />
        </header>
        <Switch>
            {/* <ProtectedRpute /> */}
            <h1>hello</h1>
            {/* <ProtectedRpute exact path="/" component={CreateBoard}/> */}
        </Switch>
        <footer>
            footer
        </footer>
    </div>
);

export default App;