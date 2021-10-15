import { GET_POSTS, CREATE_POST, EDIT_POST, UPDATE_POST, DELETE_POST } from './types';

export const getPosts = (post) => {
	return {
		type: GET_POSTS,
		payload: post
	};
};

export const createPost = (post) => {
	return {
		type: CREATE_POST,
		payload: post
	};
};

export const editPost = (index) => {
	return {
		type: EDIT_POST,
		payload: index
	};
};

export const updatePost = (post, index) => {
	return {
		type: UPDATE_POST,
		post,
		index
	};
};

export const deletePost = (index) => {
	return {
		type: DELETE_POST,
		payload: index
	};
};
