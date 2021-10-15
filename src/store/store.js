import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import allReducers from '../reducers/index';

const middleware = [thunk];

const initialState = {};

let store = createStore(allReducers, initialState, applyMiddleware(...middleware));

export default store;
