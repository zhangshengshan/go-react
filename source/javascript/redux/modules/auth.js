const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

const initialState = {
    user: {
        id: 1,
        username: 'johndoe',
        email: 'john.doe@gmail.com',
        password: 'demo',
        avatar: 'https://randomuser.me/api/portraits/med/women/1.jpg',
        firstname: 'John',
        lastname: 'Doe'
    }
}

export default function reducer(state = initialState, action = {}) {
    const {type} = action;
    switch (type) {
        default:
            return state;
    }
}
