import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import logger from 'redux-logger';

import HomeReducer from './Reducers/HomeReducer';
import NavigationReducer from './Reducers/NavigationReducer';

export default createStore(
    combineReducers({
        HomeReducer,
        NavigationReducer
    }),
    {},
    applyMiddleware(
        logger,
        promise(),
        thunk
    )
)