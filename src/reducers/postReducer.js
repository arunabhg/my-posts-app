import { GET_POSTS, CREATE_POST, EDIT_POST, UPDATE_POST, DELETE_POST } from '../actions/types';

const initialState = { posts: [] };

function postReducer(currentState = initialState, action) {
	switch (action.type) {
		case GET_POSTS:
			//console.log(action.payload);
			return { posts: action.payload };
		case CREATE_POST:
			return { posts: [...currentState.posts, action.payload] };

		case 'EDIT_POST':
			console.log(action.payload);
			return {
				posts: currentState.posts.map((post, i) => {
					if (i === action.payload) return { ...post };
				})
			};

		case DELETE_POST:
			//console.log(action.payload);
			const filteredList = currentState.posts.filter((i) => i.id !== action.payload);
			//console.log(filteredList);
			return {
				posts: filteredList
			};

		default:
			return currentState;
	}
}

export default postReducer;
