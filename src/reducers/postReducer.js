import { GET_POSTS, CREATE_POST, EDIT_POST, DELETE_POST } from '../actions/types';

const initialState = { posts: [] };

function postReducer(currentState = initialState, action) {
	switch (action.type) {
		case GET_POSTS:
			return { posts: action.payload };

		case CREATE_POST:
			return { posts: [...currentState.posts, action.payload] };

		case EDIT_POST:
			console.log(action.payload);

			const updatedList = () =>
				currentState.posts.map((post, i) =>
					i === action.index ? [...currentState.posts, action.payload] : post
				);

			return {
				posts: updatedList
			};

		case DELETE_POST:
			const filteredList = currentState.posts.filter((i) => i.id !== action.payload);

			return {
				posts: filteredList
			};

		default:
			return currentState;
	}
}

export default postReducer;
