import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import logger from 'redux-logger';


export default createStore(
    combineReducers({
        a: () => [1,2,3]
    }),
    {},
    applyMiddleware(
        logger,
        promise(),
        thunk
    )
)