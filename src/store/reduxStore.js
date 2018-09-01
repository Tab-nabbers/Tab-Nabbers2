
import {
    applyMiddleware,
    createStore
} from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import reducers from '../reducers/index';
import { githubMiddleware } from '../middleware/githubMiddleware';
import { eventMiddleware } from '../middleware/eventMiddleware';
import { userMiddleware } from '../middleware/userMiddleware';


const middlewares = [
    githubMiddleware,
    eventMiddleware,
    userMiddleware,
    promise(),
    logger
];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;