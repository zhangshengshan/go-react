import {pushState} from 'redux-router';
import {LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER} from '../constants/ActionTypes';

export function loginUserSuccess(token) {
    localStorage.setItem("token", token);

    return {
        type: LOGIN_USER_SUCCESS,
        payload: {
            token: token
        }
    };
}

export function loginUserFailure(error) {
    localStorage.removeItem("token");

    return {
        type: LOGIN_USER_FAILURE,
        payload: {
            status: error.response.status,
            statusText: error.response.statusText
        }
    }
}

export function logout() {
    localStorage.removeItem("token");
    return {
        type: LOGOUT_USER
    }
}

export function logoutAndRedirect() {
    return (dispatch, state) => {
        dispatch(logout());
        dispatch(pushState(null, '/login'));
    }
}

