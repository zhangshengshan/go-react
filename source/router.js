import React from 'react';
import {Route, IndexRoute} from 'react-router';
import history from './store/history';

import App from './containers/App';
import AboutPage from './containers/AboutPage';
import RestrictPage from './containers/RestrictPage';
import UsersPage from './containers/UsersPage';
import Blog from './views/blog';
import LoginPage from './containers/LoginPage';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Blog}/>
        <Route path="/login" component={LoginPage}/>
        <Route component={RestrictPage}>
            <Route path="/users" component={UsersPage}/>
        </Route>
        <Route path="/about" component={AboutPage}/>
        <Route path="/*" component={AboutPage}/>
    </Route>
);

export default routes;