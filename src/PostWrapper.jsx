import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Posts from './Posts';
import ModalForm from './ModalForm';
import { getPosts, createPost, editPost, deletePost } from './actions/postActions';
//import { GET_POSTS } from './actions/types';

function PostWrapper(props) {
	const dispatch = useDispatch();

	//const { posts } = useSelector((state) => state.postList);
	//console.log(posts);

	useEffect(() => {
		const loadPosts = async () => {
			const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
			//setPosts(response.data);
			dispatch(getPosts(resp.data));
			//console.log(resp.data);
			//dispatch({ type: GET_POSTS, payload: resp.data });
		};

		loadPosts();
	}, []);

	return (
		<div className='App'>
			<h1 className='title'>{props.pageTitle}</h1>
			<div className='subtitle'>
				<h1>{props.postTitle}</h1>
				<div>
					<ModalForm />
				</div>
			</div>
			<div className='Wrapper'>
				<Posts />
			</div>
		</div>
	);
}

export default PostWrapper;
