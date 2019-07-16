import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Main from './Main';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Redirect path='*' to={{pathname: '/'}}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
