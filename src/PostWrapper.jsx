import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Posts from './Posts';
import ModalForm from './ModalForm';
import { getPosts } from './actions/postActions';

function PostWrapper(props) {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const [create, setCreate] = useState(true);
	const { posts } = useSelector((state) => state.post);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	useEffect(() => {
		const loadPosts = async () => {
			const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');

			dispatch(getPosts(resp.data));
		};

		loadPosts();
	}, []);

	const title = '';
	const body = '';
	const post = {
		title,
		body
	};

	return (
		<div className='App'>
			<h1 className='title'>{props.pageTitle}</h1>
			<div className='subtitle'>
				<h1>{props.postTitle}</h1>
				<div>
					<Button variant='primary' onClick={handleShow} data-toggle='modal'>
						Create Post
					</Button>

					<ModalForm show={show} close={handleClose} isCreate={create} post={post} />
				</div>
			</div>
			<div className='Wrapper'>
				<Posts />
			</div>
		</div>
	);
}

export default PostWrapper;
