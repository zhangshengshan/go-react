import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as form} from 'redux-form';

import auth from './auth';
import loading from './loading';
import users from './users';

const  rootReducer = combineReducers({
    auth,
    loading,
    users,
    routing: routerReducer
});

export default rootReducer;