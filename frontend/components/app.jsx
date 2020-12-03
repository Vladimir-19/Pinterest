import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRpute } from '../util/route_util';

import CreateBoard from "./boards/create_board_container";

const App  = () => (
    <div className="app-component">

        <header>
            header
        </header>
        <Switch>
            <h1>hello</h1>
            {/* <ProtectedRpute exact path="/" component={CreateBoard}/> */}
        </Switch>
        <footer>
            footer
        </footer>
    </div>
);

export default App;