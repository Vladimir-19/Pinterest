import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRpute } from '../util/route_util';

const App  = () => (
    <div className="app-component">

        <header>
            header
        </header>
        <Switch>

        </Switch>
        <footer>
            footer
        </footer>
    </div>
);

export default App;