import {take, put, call} from 'redux-saga/effects'
import {hideLoadingModal} from '../redux/modules/loading'

const HALF_SECOND = 500;

const wait = ms=> {
    new Promise(resolve => {
        setTimeout(()=> resolve(), ms);
    });
};

function* delay(getState) {
    while(yield take('SHOW_LOADING_MODAL')) {
        if(getState().loading) {
            yield call(wait, HALF_SECOND);
            yield put(hideLoadingModal());
        }
    }
}

export default delay;