import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Post from './Post';
import ModalForm from './ModalForm';

function Posts(props) {
	const [posts, setPosts] = useState([]);
	const [showModal, setShowModal] = useState(false);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	const handleChange = (e) => {
		if (e.target.controlId === 'ControlInputTitle') {
			const newTitle = e.target.value;
			//console.log(newTitle);
			setTitle(newTitle);
		} else {
			const newDesc = e.target.value;
			//console.log(newDesc);
			setDescription(newDesc);
		}
	};

	const handleSubmit = (args) => {
		//event.preventDefault();

		console.log(`Argument from Modal to Posts: ${args}`);

		setPosts(args);
	};

	useEffect(() => {
		const loadPosts = async () => {
			axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
				// set json data in local storage initially
				// localStorage.setItem('data', JSON.stringify(response.data));
				setPosts(response.data);
			});
		};

		// // Check if data exists in local storage
		// if (localStorage.getItem('data')) {
		// 	// set the state from localstorage
		// 	setPosts(JSON.parse(localStorage.getItem('data')));
		// } else {
		// 	// if no data exists in local storage, call api
		// 	loadPosts();
		// }

		loadPosts();
	}, []);

	return (
		<div className='App'>
			<h1 className='title'>{props.pageTitle}</h1>
			<div className='subtitle'>
				<h1>{props.postTitle}</h1>
				{/* <Modal show={showModal} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Create Post</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group className='mb-3' controlId='ControlInputTitle'>
								<Form.Label>Post Title</Form.Label>
								<Form.Control type='text' onChange={handleChange} placeholder='Enter post title' />
							</Form.Group>
							<Form.Group className='mb-3' controlId='ControlInputDesc'>
								<Form.Label>Post Description</Form.Label>
								<Form.Control
									type='text'
									onChange={handleChange}
									placeholder='Enter post description'
								/>
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='primary' onClick={handleSubmit}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal> */}
				<ModalForm
					show={showModal}
					handleClose={handleClose}
					postsData={posts}
					handleSubmit={handleSubmit}
				/>
				<Button variant='primary' onClick={handleShow}>
					Create Post
				</Button>
				{/* <button className='create-post'>Create Post</button> */}
			</div>
			<div className='Posts'>
				{posts.map((post, index) => (
					<div key={index} className='PostContent'>
						<Post postId={index} title={post.title} body={post.body} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Posts;
