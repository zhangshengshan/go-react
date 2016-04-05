import React, {Component, PropTypes} from 'react'
import {Provider} from 'react-redux'
import {Router} from 'react-router';
import history from './store/history';
import { browserHistory } from 'react-router'
import store from './redux/configureStore';
import routes from './redux/router';
import withMaterialUI from './decorators/withMaterialUI';

@withMaterialUI
export default class Root extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router history={history}>
                        {routes}
                    </Router>
                </Provider>
            </div>
        );
    }
};