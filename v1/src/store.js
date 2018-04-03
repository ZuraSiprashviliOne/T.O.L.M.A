import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import logger from 'redux-logger';

import HomeReducer from './Reducers/HomeReducer';

export default createStore(
    combineReducers({
        HomeReducer
    }),
    {},
    applyMiddleware(
        logger,
        promise(),
        thunk
    )
)