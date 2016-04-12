import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER
} from '../constants/ActionTypes';
//const LOGIN = 'auth/LOGIN';
//const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
//const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
//
//const REGISTER = 'auth/REGISTER';
//const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
//const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

//const initialState = {
//    user: {
//        id: 1,
//        username: 'johndoe',
//        email: 'john.doe@gmail.com',
//        password: 'demo',
//        avatar: 'https://randomuser.me/api/portraits/med/women/1.jpg',
//        firstname: 'John',
//        lastname: 'Doe'
//    }
//}

export default function reducer(state = {}, action = {}) {
    const {type, payload,error} = action;
    switch (type) {
        case LOGIN_USER_REQUEST:
            console.log('--------begin--------');
            return state;
        case LOGIN_USER_SUCCESS:
            debugger;
            console.log('--------success--------');
            return Object.assign({}, state, {
                payload,
                shouldRedirect: true
            });
        case LOGIN_USER_FAILURE:
            console.log('--------failure--------');
            return Object.assign({}, state, {error, payload});
        default:
            return state;
    }
}
