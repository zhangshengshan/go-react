import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER
} from '../constants/ActionTypes';

/**
 * 登录
 *
 * @param identity
 * @param password
 * @returns {Object}
 */
export function login(identity, password) {
    return {
        type: [
            LOGIN_USER_REQUEST,
            LOGIN_USER_SUCCESS,
            LOGIN_USER_FAILURE
        ],
        payload: {},
        meta: {
            fetch: ['/v1/user/login',
                {
                    username: identity,
                    password
                }]
        }
    };
}