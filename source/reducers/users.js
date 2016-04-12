const FETCH_USERS = 'users/FETCH_USERS'
const initialState = [];

export default function reducer(state = initialState, action = {}) {
    const {type, payload} = action
    switch (type) {
        case FETCH_USERS :
            return [...payload];
            break;
        default:
            return state;
    }
}

import * as urls from '../config/urls'
