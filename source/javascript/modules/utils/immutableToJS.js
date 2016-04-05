import {Iterable} from 'immutable'

export function immutableToJS(state) {
    return Object.keys(state).reduce((newState, key)=> {
        const val = state[key];
        newState[key] = Iterable.isIterable(val) ? val.toJS() : val;

        return newState;
    }, {});
}