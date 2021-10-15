import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, createPost, editPost, deletePost } from './actions/postActions';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function Posts(props) {
	const posts = useSelector((state) => state.posts.posts);
	// console.log(`Fetched data using useSelector: ${posts}`);

	return (
		<>
			{posts.map((post) => (
				<div className='Post' key={post.id}>
					<img src={`https://picsum.photos/300/300?random&t=${post.id}`} alt='random photos' />
					<h1>{post.title}</h1>
					<p>{post.body}</p>
					{/* <EditModal key={post.id} postId={post.id} /> */}
					<div className='control-buttons'>
						<Button variant='outline-info'>Edit</Button>
						<Button variant='outline-danger'>Delete</Button>
					</div>
				</div>
			))}
		</>
	);
}

export default Posts;
