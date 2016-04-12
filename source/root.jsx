import {Component} from 'react'
import {Provider} from 'react-redux'
import {Router} from 'react-router';
import history from './store/history';
import store from './store/configureStore';
import routes from './router';
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