import './bootstrap';
import './components/Example';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Master from './components/Master';
import CreateProduct from './components/CreateProduct';
import DisplayProduct from './components/DisplayProduct';
import UpdateProduct from './components/UpdateProduct';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Master path="/">
            <Route path="/add-item" component={CreateProduct} />
            <Route path="/display-item" component={DisplayProduct} />
            <Route path={"/edit/:id"} component={UpdateProduct} />
        </Master>
    </Router>
    , document.getElementById('example'));