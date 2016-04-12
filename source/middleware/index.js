import thunk from 'redux-thunk';
import sagaMiddleware from 'redux-saga';
import {routerMiddleware} from 'react-router-redux';
import history from '../store/history';
import delay from '../sagas/delay';
import logging from './logging';
import logger from './logger';
import request from './request';
import promiseMw from './promiseMw'

export default [
    thunk,
    sagaMiddleware(delay),
    logging,
    logger,
    request,
    promiseMw,
    routerMiddleware(history)
];