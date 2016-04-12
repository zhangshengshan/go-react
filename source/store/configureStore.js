import {createStore, applyMiddleware, compose} from 'redux';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import routers from '../router';
import history from 'history';
import reducer from '../reducers/reducer';
import middleware from '../middleware'

let finalCreateStore = compose(
    applyMiddleware.apply(this, middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

function getDebugSessionKey() {
    const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
    return (matches && matches.length > 0) ? matches[1] : null;
}

const store = finalCreateStore(reducer);

if(module.hot) {
    module.hot.accept('../reducers/reducer', () => {
        const nextRootReducer = require('../reducers/reducer');
        store.replaceReducer(nextRootReducer);
    });
}

syncHistoryWithStore(history, store);
export default store;
