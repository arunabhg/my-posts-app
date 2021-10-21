import * as actions from './types';

export const getPosts = (post) => {
	return {
		type: actions.GET_POSTS,
		payload: post
	};
};

export const createPost = (post) => {
	return {
		type: actions.CREATE_POST,
		payload: post
	};
};

export const updatePost = (post) => {
	return {
		type: actions.UPDATE_POST,
		payload: post
	};
};

export const deletePost = (index) => {
	return {
		type: actions.DELETE_POST,
		payload: index
	};
};
