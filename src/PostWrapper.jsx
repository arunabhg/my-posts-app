import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import Posts from './Posts';
import AddForm from './AddForm';
import { getPosts } from './actions/postActions';
//import { GET_POSTS } from './actions/types';

function PostWrapper(props) {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const { posts } = useSelector((state) => state.post);
	// console.log(posts);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

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

	useEffect(() => {
		handleClose();
	}, [posts]);

	return (
		<div className='App'>
			<h1 className='title'>{props.pageTitle}</h1>
			<div className='subtitle'>
				<h1>{props.postTitle}</h1>
				<div>
					<Button variant='primary' onClick={handleShow} data-toggle='modal'>
						Create Post
					</Button>
					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Create Post</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<AddForm />
						</Modal.Body>
						<Modal.Footer>
							<Button variant='secondary' onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
			<div className='Wrapper'>
				<Posts />
			</div>
		</div>
	);
}

export default PostWrapper;
