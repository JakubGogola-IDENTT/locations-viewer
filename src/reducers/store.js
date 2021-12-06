import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { csv } from './csv';
import { locations } from './locations';

const middlewares = [thunkMiddleware.withExtraArgument(new Map())];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
}

export const store = createStore(
    combineReducers({
        csv,
        locations,
    }),
    {},
    compose(applyMiddleware(...middlewares))
);
