import React from 'react';
import {Route, IndexRoute} from 'react-router';
import history from '../store/history';

import App from '../containers/App'
import AboutPage from '../containers/AboutPage'
import Blog from '../views/blog';
import Login from '../views/login';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Blog} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={AboutPage} />
        <Route path="/*" component={AboutPage} />
    </Route>
);

export default routes;