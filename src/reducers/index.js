import { combineReducers } from 'redux';
import postReducer from './postReducer';

const allReducers = combineReducers({
	post: postReducer
});

export default allReducers;
