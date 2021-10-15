import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, createPost, editPost, deletePost } from './actions/postActions';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Posts = () => {
	const postsList = useSelector((state) => state.posts.posts);
	let dispatch = useDispatch();
	//console.log(`Fetched data using useSelector: ${postsList}`);

	return (
		<>
			{postsList.map((post) => (
				<div className='Post' key={post.title}>
					<img src={`https://picsum.photos/300/300?random&t=${post.id}`} alt='random photos' />
					<h1>{post.title}</h1>
					<p>{post.body}</p>
					{/* <EditModal key={post.id} postId={post.id} /> */}
					<div className='control-buttons'>
						<Button variant='outline-info'>Edit</Button>
						<Button variant='outline-danger' onClick={() => dispatch(deletePost(post.id))}>
							Delete
						</Button>
					</div>
				</div>
			))}
		</>
	);
};

export default Posts;
