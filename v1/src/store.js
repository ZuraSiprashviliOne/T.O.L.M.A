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
        test: () => {
            return [1,2,3,4]
        }
    }),
    {},
    applyMiddleware(
        logger,
        promise(),
        thunk
    )
)