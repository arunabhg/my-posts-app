import * as actions from '../actions/types';

const initialState = { posts: [] };

function postReducer(currentState = initialState, action) {
	switch (action.type) {
		case actions.GET_POSTS:
			return { posts: action.payload };

		case actions.CREATE_POST:
			return { posts: [...currentState.posts, action.payload] };

		case actions.UPDATE_POST:
			const updatedList = currentState.posts.map((postItem) =>
				postItem.id !== action.payload.id ? postItem : action.payload
			);

			return {
				posts: updatedList
			};

		case actions.DELETE_POST:
			const filteredList = currentState.posts.filter((i) => i.id !== action.payload);

			return {
				posts: filteredList
			};

		default:
			return currentState;
	}
}

export default postReducer;
